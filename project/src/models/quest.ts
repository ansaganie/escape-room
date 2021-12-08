import { QuestLevel, QuestType } from '../constants';

export type QuestId = string;

export type PeopleCount = [ number, number ];

export type Quest = {
  id: QuestId,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: QuestType,
  level: QuestLevel,
  peopleCount: PeopleCount,
  duration: number,
};
