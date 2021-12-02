import { Quest } from './../../models/quest';
import { QuestTypes } from '../../constants';

export type QuestState = {
  questType: QuestTypes,
  quests: Quest[],
  questsLoading: boolean,
  questLoading: boolean,
}
