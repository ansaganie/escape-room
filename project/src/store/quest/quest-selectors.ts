import { QuestType } from '../../constants';
import { Quest, QuestId } from '../../models/quest';
import { RootState } from '../store';

const getQuestType = (state: RootState): QuestType => state.quest.questType;
const getQuests = (state: RootState): Quest[] => state.quest.quests;
const getNotFoundQuestId = (state: RootState): QuestId => state.quest.notFoundQuestId;
const getQuestsLoading = (state: RootState): boolean => state.quest.questsLoading;
const getQuestLoading = (state: RootState): boolean => state.quest.questLoading;

export {
  getQuestType,
  getQuests,
  getNotFoundQuestId,
  getQuestsLoading,
  getQuestLoading
};

