import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { getFakeQuest, getFakeQuests } from '../../test-utils/mock-data';
import { RootState, thunkApi } from '../store';
import thunk from 'redux-thunk';
import { AsyncDispatch, testState } from '../../setupTests';
import { BackendRoute } from '../../constants';
import { Action } from 'redux';
import { fetchQuest, fetchQuests } from './quest-thunks';
import { addQuest, setNotFoundQuestId, setQuestLoading, setQuests } from './quest-slice';
import { mapQuestsToClient, mapQuestToClient } from '../../services/quest-mapper';

const axios = new MockAdapter(thunkApi);
const middleware = [ thunk.withExtraArgument(thunkApi) ];

const mockStore = configureMockStore<
  RootState,
  Action,
  AsyncDispatch
>(middleware);
const store = mockStore(testState);

describe('Thunk: Quest', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should fetch and set quests', async () => {
    const quests = getFakeQuests();

    axios
      .onGet(BackendRoute.Quests)
      .reply(200, quests);

    await store.dispatch(fetchQuests());

    expect(store.getActions()).toEqual([ setQuests(mapQuestsToClient(quests)) ]);
  });

  it('should fetch and add quest', async () => {
    const quest = getFakeQuest();

    axios
      .onGet(BackendRoute.getQuestLink(quest.id))
      .reply(200, quest);

    await store.dispatch(fetchQuest(quest.id));

    expect(store.getActions()).toEqual([
      setQuestLoading(true),
      addQuest(mapQuestToClient(quest)),
      setQuestLoading(false),
    ]);
  });

  it('should set not found quest id', async () => {
    const quest = getFakeQuest();

    axios
      .onGet(BackendRoute.getQuestLink(quest.id))
      .reply(404);

    await store.dispatch(fetchQuest(quest.id));

    expect(store.getActions()).toEqual([
      setQuestLoading(true),
      setNotFoundQuestId(quest.id),
      setQuestLoading(false),
    ]);
  });
});
