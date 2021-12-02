import { Quest, QuestId } from './../../models/quest';
import { QuestType } from '../../constants';

export type QuestState = {
  questType: QuestType,
  quests: Quest[],
  notFoundQuestId: QuestId,
  questsLoading: boolean,
  questLoading: boolean,
}
