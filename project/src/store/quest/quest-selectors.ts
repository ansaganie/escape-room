import { QuestTypes } from '../../constants';
import { Quest } from '../../models/quest';
import { RootState } from '../store';

const getQuestType = (state: RootState): QuestTypes => state.quest.questType;
const getQuests = (state: RootState): Quest[] => state.quest.quests;
const getQuestsLoading = (state: RootState): boolean => state.quest.questsLoading;
const getQuestLoading = (state: RootState): boolean => state.quest.questLoading;

export {
  getQuestType,
  getQuests,
  getQuestsLoading,
  getQuestLoading
};

