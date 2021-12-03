import { createSelector } from 'reselect';
import { QuestType } from '../../constants';
import { Quest, QuestId } from '../../models/quest';
import { RootState } from '../store';

const getQuestType = (state: RootState): QuestType => state.quest.questType;
const getAllQuests = (state: RootState): Quest[] => state.quest.quests;
const getNotFoundQuestId = (state: RootState): QuestId => state.quest.notFoundQuestId;
const getQuestsLoading = (state: RootState): boolean => state.quest.questsLoading;
const getQuestLoading = (state: RootState): boolean => state.quest.questLoading;

const getQuests = createSelector(
  getAllQuests,
  getQuestType,
  (quests, questType) => {
    if (questType === QuestType.All) {
      return quests;
    }

    return quests.filter(({ type }) => type === questType);
  },
);

export {
  getQuestType,
  getAllQuests,
  getNotFoundQuestId,
  getQuestsLoading,
  getQuestLoading,
  getQuests
};

