import { Action, combineReducers, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import api from '../services/api';
import { SliceNames } from './constants';
import questReducer from './quest/quest-slice';

const rootReducer = combineReducers({
  [SliceNames.Quest]: questReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AsyncAction<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>
export type AsyncDispatch = ThunkDispatch<RootState, AxiosInstance, Action>;

export default store;
