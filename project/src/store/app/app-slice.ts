import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import { AppState } from './app-types';

const initialState: AppState = {
  serverNotWorking: false,
};

const appSlice = createSlice({
  name: SliceNames.App,
  initialState,
  reducers: {
    setServerNotWorking: (state) => {
      state.serverNotWorking = true;
    },
  },
});

const appReducer = appSlice.reducer;

export const { setServerNotWorking } = appSlice.actions;

export default appReducer;
