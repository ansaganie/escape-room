import { datatype } from 'faker';

const getRandomInt = (min: number, max: number, precision?: number): number =>
  datatype.number({ min, max, precision });

const getRandomElement = <T>(arr: Array<T>): T =>
  arr[getRandomInt(0, arr.length - 1)];

export { getRandomInt, getRandomElement };
