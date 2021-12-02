import { QuestTypes } from '../constants';

export type QuestLevel = [ 'easy', 'medium', 'hard'];

export type QuestId = string;

type PeopleCount = [ number, number];

export type Quest = {
  id: QuestId,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: QuestTypes,
  level: QuestLevel,
  peopleCount: PeopleCount,
  duration: number,
};
