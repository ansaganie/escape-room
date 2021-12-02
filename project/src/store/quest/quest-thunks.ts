import { AxiosError } from 'axios';
import appToast from '../../packages/app-toast';
import { Quest, QuestId } from '../../models/quest';
import { BackendRoutes } from '../../constants';
import { AsyncAction } from './../store';
import { mapQuestsToClient, mapQuestToClient } from '../../services/quest-mapper';
import { addQuest, setQuestLoading, setQuests, setQuestsLoading } from './quest-slice';

const fetchQuests = (): AsyncAction =>
  async (dispatch, _getState, api ): Promise<void> => {
    dispatch(setQuestsLoading(true));

    try {
      const response = await api.get<Quest[]>(BackendRoutes.Quests);

      dispatch(setQuests(mapQuestsToClient(response.data)));
    } catch (error) {
      appToast.error((error as AxiosError).response?.data);
    } finally {
      dispatch(setQuestsLoading(false));
    }
  };

const fetchQuest = (questId: QuestId): AsyncAction =>
  async (dispatch, _getState, api ): Promise<void> => {
    dispatch(setQuestLoading(true));

    try {
      const response = await api.get<Quest>(BackendRoutes.getQuestLink(questId));

      dispatch(addQuest(mapQuestToClient(response.data)));
    } catch (error) {
      appToast.error((error as AxiosError).response?.data);
    } finally {
      dispatch(setQuestLoading(false));
    }
  };

export {
  fetchQuests,
  fetchQuest
};
