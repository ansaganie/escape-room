import { QuestType } from '../../constants';
import { testState, unknownAction } from '../../setupTests';
import { deepClone } from '../../test-utils/common';
import { getFakeQuest, getFakeQuests } from '../../test-utils/mock-data';
import { SliceNames } from '../constants';
import questReducer, {
  setQuestType,
  setQuests,
  addQuest,
  setNotFoundQuestId,
  setQuestLoading
} from './quest-slice';

const questState = deepClone(testState)[SliceNames.Quest];
describe('Reducer: Quest', () => {
  it('should return initial state', () => {
    const initialState = deepClone(questState);
    const expectedState = deepClone(questState);

    expect(questReducer(initialState, unknownAction())).toEqual(expectedState);
  });

  it('should set quest type', () => {
    const initialState = deepClone(questState);
    const expectedState = deepClone(questState);
    expectedState.questType = QuestType.Adventures;

    expect(questReducer(initialState, setQuestType(QuestType.Adventures))).toEqual(expectedState);
  });

  it('should set quests', () => {
    const quests = getFakeQuests();
    const initialState = deepClone(questState);
    const expectedState = deepClone(questState);
    expectedState.quests = quests;

    expect(questReducer(initialState, setQuests(quests))).toEqual(expectedState);
  });

  it('should add quest', () => {
    const quest = getFakeQuest();
    const initialState = deepClone(questState);
    const expectedState = deepClone(questState);
    expectedState.quests.push(quest);

    expect(questReducer(initialState, addQuest(quest))).toEqual(expectedState);
  });

  it('should set not found quest id', () => {
    const quest = getFakeQuest();
    const initialState = deepClone(questState);
    const expectedState = deepClone(questState);
    expectedState.notFoundQuestId = quest.id;

    expect(questReducer(initialState, setNotFoundQuestId(quest.id))).toEqual(expectedState);
  });

  it('should set quest loading', () => {
    const initialState = deepClone(questState);
    const expectedState = deepClone(questState);
    expectedState.questLoading = true;

    expect(questReducer(initialState, setQuestLoading(true))).toEqual(expectedState);
  });
});
