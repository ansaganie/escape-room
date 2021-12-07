// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { ThunkDispatch } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { QuestType } from './constants';
import { RootState } from './store/store';

const testState: RootState = {
  app: {
    serverNotWorking: false,
  },
  quest: {
    notFoundQuestId: '',
    questLoading: false,
    questType: QuestType.All,
    quests: [],
  },
};

const unknownAction = (): Action => ({ type: 'unknown'}) as Action;
export type AsyncDispatch = ThunkDispatch<RootState, AxiosInstance, Action>;

export { testState, unknownAction };
