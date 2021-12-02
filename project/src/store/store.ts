import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { AXIOS_DEFAULT_CONFIG, HttpCode } from '../constants';
import { SliceNames } from './constants';
import appReducer, { setServerNotWorking } from './app/app-slice';
import questReducer from './quest/quest-slice';

const api = axios.create(AXIOS_DEFAULT_CONFIG);

const rootReducer = combineReducers({
  [SliceNames.Quest]: questReducer,
  [SliceNames.App]: appReducer,
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

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const { response } = error;

    const status = response?.status;

    if (
      status
      && status >= HttpCode.ServerErrorMin
      && status <= HttpCode.ServerErrorMax
    ) {
      store.dispatch(setServerNotWorking());
    }

    return Promise.reject(error);
  },
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AsyncAction<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>

export default store;
