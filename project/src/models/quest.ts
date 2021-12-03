import { QuestType } from '../constants';

export enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export type QuestId = string;

type PeopleCount = [ number, number ];

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
