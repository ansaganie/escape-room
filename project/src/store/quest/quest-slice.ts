import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import { QuestState } from './quest-types';
import { QuestTypes } from '../../constants';
import { Quest } from '../../models/quest';

const initialState: QuestState = {
  questType: QuestTypes.All,
  quests: [],
  questsLoading: false,
  questLoading: false,
};

const questSlice = createSlice({
  name: SliceNames.Quest,
  initialState,
  reducers: {
    setQuestType: (state, action: PayloadAction<QuestTypes>) => {
      state.questType = action.payload;
    },
    setQuests:  (state, action: PayloadAction<Quest[]>) => {
      state.quests = action.payload;
    },
    addQuest:  (state, action: PayloadAction<Quest>) => {
      state.quests.push(action.payload);
    },
    setQuestsLoading:  (state, action: PayloadAction<boolean>) => {
      state.questsLoading = action.payload;
    },
    setQuestLoading:  (state, action: PayloadAction<boolean>) => {
      state.questLoading = action.payload;
    },
  },
});

const questReducer = questSlice.reducer;

export const {
  setQuestType,
  setQuests,
  addQuest,
  setQuestsLoading,
  setQuestLoading,
} = questSlice.actions;

export default questReducer;
