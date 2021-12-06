import { image, lorem, datatype } from 'faker';
import { QuestType } from '../constants';
import { PeopleCount, Quest, QuestLevel } from '../models/quest';
import { getRandomElement, getRandomInt } from './random';

const MIN_DURATION = 50;
const MAX_DURATION = 250;
const MIN_PEOPLE_COUNT = 2;
const MAX_PEOPLE_COUNT = 10;

const getRandomPeopleCount = (): PeopleCount => [
  getRandomInt(MIN_PEOPLE_COUNT, MAX_PEOPLE_COUNT),
  getRandomInt(MIN_PEOPLE_COUNT, MAX_PEOPLE_COUNT),
].sort() as PeopleCount;

const getFakeQuest = (): Quest => ({
  coverImg: image.nightlife(),
  description: lorem.paragraph(),
  duration: getRandomInt(MIN_DURATION, MAX_DURATION),
  id: datatype.uuid(),
  level: getRandomElement(Object.values(QuestLevel)),
  peopleCount: getRandomPeopleCount(),
  previewImg: image.nature(),
  title: lorem.words(),
  type: getRandomElement(Object.values(QuestType)),
});

export { getFakeQuest };
