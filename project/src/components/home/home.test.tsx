import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { AppRoute, BackendRoute, QuestType, TabsInfo } from '../../constants';
import { mockState } from '../../setupTests';
import { thunkApi } from '../../store/store';
import { appTheme } from '../app/common';
import { getFakeQuests } from '../../test-utils/mock-data';
import Home from './home';

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
      const fakeQuests = getFakeQuests();

      axios.onGet(BackendRoute.Quests)
        .reply(200, fakeQuests);

      const screen = render(
        <Provider store={store}>
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

  it('should render quest cards of chosen type', async () => {
    await act(async () => {
      const fakeQuests = getFakeQuests(40);
      const mysticQuests = fakeQuests.filter(({ type }) => type === QuestType.Mystic);
      const horrorQuests = fakeQuests.filter(({ type }) => type === QuestType.Horror);

      axios.onGet(BackendRoute.Quests)
        .reply(200, fakeQuests);

      const screen = render(
        <Provider store={store}>
          <Router history={history}>
            <ThemeProvider theme={appTheme}>
              <Home />
            </ThemeProvider>
          </Router>
        </Provider>,
      );

      const button = screen.getByText(TabsInfo[QuestType.Mystic].title).parentElement;

      if ( button) {
        userEvent.click(button);
      }

      mysticQuests.forEach(async ({ title }) => {
        expect(await screen.findByText(title)).toBeInTheDocument();
      });

      horrorQuests.forEach(({ title }) => {
        expect(screen.queryByText(title)).not.toBeInTheDocument();
      });
    });
  });
});
