import { AxiosError } from 'axios';
import appToast from '../../packages/app-toast';
import { Quest, QuestId } from '../../models/quest';
import { BackendRoutes, HttpCode } from '../../constants';
import { AsyncAction } from './../store';
import { mapQuestsToClient, mapQuestToClient } from '../../services/quest-mapper';
import { addQuest, setNotFoundQuestId, setQuestLoading, setQuests } from './quest-slice';

const fetchQuests = (): AsyncAction =>
  async (dispatch, _getState, api ): Promise<void> => {
    try {
      const response = await api.get<Quest[]>(BackendRoutes.Quests);

      dispatch(setQuests(mapQuestsToClient(response.data)));

      return Promise.resolve();
    } catch (error) {
      appToast.error((error as AxiosError).response?.data);
    }
  };

const fetchQuest = (questId: QuestId): AsyncAction =>
  async (dispatch, _getState, api ): Promise<void> => {
    dispatch(setQuestLoading(true));

    try {
      const response = await api.get<Quest>(BackendRoutes.getQuestLink(questId));

      dispatch(addQuest(mapQuestToClient(response.data)));
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        setNotFoundQuestId(questId);
      } else {
        appToast.error(axiosError.response?.data);
      }
    } finally {
      dispatch(setQuestLoading(false));
    }
  };

export {
  fetchQuests,
  fetchQuest
};
