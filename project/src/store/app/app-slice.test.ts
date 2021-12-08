import { testState, unknownAction } from '../../setupTests';
import { deepClone } from '../../test-utils/common';
import { SliceNames } from '../constants';
import appReducer, { setServerNotWorking } from './app-slice';

const appState = deepClone(testState)[SliceNames.App];
describe('Reducer: App', () => {
  it('should return initial state', () => {
    const initialState = deepClone(appState);
    const expectedState = deepClone(appState);

    expect(appReducer(initialState, unknownAction())).toEqual(expectedState);
  });

  it('should set server not working', () => {
    const initialState = deepClone(appState);
    const expectedState = deepClone(appState);
    expectedState.serverNotWorking = true;

    expect(appReducer(initialState, setServerNotWorking())).toEqual(expectedState);
  });
});
