import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { AppRoute, BackendRoutes, TabsInfo } from '../../constants';
import { mockState } from '../../setupTests';
import { thunkApi } from '../../store/store';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import Home from './home';
import { deepClone } from '../../test-utils/common';
import { getFakeQuests } from '../../test-utils/mock-data';

const axios = new MockAdapter(thunkApi);
const middleware = [ thunk.withExtraArgument(thunkApi) ];

const mockStore = configureMockStore(middleware);
const store = mockStore(mockState);
const history = createMemoryHistory();

describe('Component: Home', () => {
  it('should render correctly', async () => {
    await act(async () => {
      const title = /Выберите тематику/;
      const subtext = /квесты в Санкт-Петербурге/;

      history.push(AppRoute.Home);

      const screen = render(
        <Provider store={store}>
          <Router history={history}>
            <ThemeProvider theme={appTheme}>
              <Home />
            </ThemeProvider>
          </Router>
        </Provider>,
      );

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(subtext)).toBeInTheDocument();

      Object.values(TabsInfo).forEach((tab) => {
        expect(screen.getByText(tab.title)).toBeInTheDocument();
      });
    });
  });

  it('should render quest cards', async () => {
    await act(async () => {
      const state = deepClone(mockState);
      const fakeQuests = getFakeQuests();
      state.quest.quests = fakeQuests;

      axios.onGet(BackendRoutes.Quests)
        .reply(200, fakeQuests);

      const screen = render(
        <Provider store={mockStore(state)}>
          <Router history={history}>
            <ThemeProvider theme={appTheme}>
              <Home />
            </ThemeProvider>
          </Router>
        </Provider>,
      );

      fakeQuests.forEach(async ({ title }) => {
        expect(await screen.findByText(title)).toBeInTheDocument();
      });
    });
  });
});
