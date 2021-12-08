import { image, lorem, datatype } from 'faker';
import { QuestType, QuestLevel } from '../constants';
import { PeopleCount, Quest } from '../models/quest';
import { getRandomElement, getRandomInt } from './random';

const MIN_DURATION = 50;
const MAX_DURATION = 250;
const MIN_PEOPLE_COUNT = 2;
const MAX_PEOPLE_COUNT = 10;
const QUESTS_COUNT = 15;

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

const getFakeQuests = (count: number = QUESTS_COUNT): Quest[] =>
  new Array(count).fill(null).map(getFakeQuest);

export { getFakeQuest, getFakeQuests };
