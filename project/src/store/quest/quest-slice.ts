import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import { QuestState } from './quest-types';
import { QuestType } from '../../constants';
import { Quest, QuestId } from '../../models/quest';

const initialState: QuestState = {
  questType: QuestType.All,
  quests: [],
  notFoundQuestId: '',
  questsLoading: false,
  questLoading: false,
};

const questSlice = createSlice({
  name: SliceNames.Quest,
  initialState,
  reducers: {
    setQuestType: (state, action: PayloadAction<QuestType>) => {
      state.questType = action.payload;
    },
    setQuests:  (state, action: PayloadAction<Quest[]>) => {
      state.quests = action.payload;
    },
    addQuest:  (state, action: PayloadAction<Quest>) => {
      state.quests.push(action.payload);
    },
    setNotFoundQuestId:  (state, action: PayloadAction<QuestId>) => {
      state.notFoundQuestId = (action.payload);
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
  setNotFoundQuestId,
  setQuestsLoading,
  setQuestLoading,
} = questSlice.actions;

export default questReducer;
