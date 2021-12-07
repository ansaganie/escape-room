import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Router } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { createMemoryHistory } from 'history';
import { AppRoute, BackendRoute, QuestLevelTitle, TabsInfo } from '../../constants';
import { mockState } from '../../setupTests';
import { thunkApi } from '../../store/store';
import { appTheme } from '../app/common';
import { getFakeQuest } from '../../test-utils/mock-data';
import DetailedQuest from './detailed-quest';

const axios = new MockAdapter(thunkApi);
const middleware = [ thunk.withExtraArgument(thunkApi) ];

const mockStore = configureMockStore(middleware);
const store = mockStore(mockState);
const history = createMemoryHistory();

describe('Component: Detailed Quest', () => {
  it('should render correctly', () => {
    act(async () => {
      const quest = getFakeQuest();
      const {
        title,
        type,
        duration,
        peopleCount: [ min, max ],
        level,
        description,
      } = quest;
      const altText = `Квест ${title}`;
      const peopleCountText = `${min}–${max} чел`;
      const durationText = `${duration} мин`;

      axios
        .onGet(BackendRoute.getQuestLink(quest.id))
        .reply(200, quest);

      history.push(AppRoute.getQuestLink(quest.id));

      const screen = render(
        <Provider store={store}>
          <Router history={history}>
            <ThemeProvider theme={appTheme}>
              <DetailedQuest />
            </ThemeProvider>
          </Router>
        </Provider>,
      );

      expect(await screen.findByAltText(altText)).toBeInTheDocument();
      expect(await screen.findByText(title)).toBeInTheDocument();
      expect(await screen.findByText(TabsInfo[type].title)).toBeInTheDocument();
      expect(await screen.findByText(durationText)).toBeInTheDocument();
      expect(await screen.findByText(peopleCountText)).toBeInTheDocument();
      expect(await screen.findByText(description)).toBeInTheDocument();
      expect(await screen.findByText(QuestLevelTitle[level])).toBeInTheDocument();
    });
  });

  it('should render modal', () => {
    act(async () => {
      const quest = getFakeQuest();
      const bookButtonTitle = /Забронировать/;
      const nameLabel = /Ваше Имя/;
      const phoneLabel = /Контактный телефон (Пример: 9855310868)/;
      const peopleCountLabel = /Количество участников/;

      axios
        .onGet(BackendRoute.getQuestLink(quest.id))
        .reply(200, quest);

      history.push(AppRoute.getQuestLink(quest.id));

      const screen = render(
        <Provider store={store}>
          <Router history={history}>
            <ThemeProvider theme={appTheme}>
              <DetailedQuest />
            </ThemeProvider>
          </Router>
        </Provider>,
      );

      const bookButton = await screen.findByText(bookButtonTitle);

      expect(bookButton).toBeInTheDocument();
      expect(await screen.findByText(nameLabel)).toBeInTheDocument();
      expect(await screen.findByText(phoneLabel)).toBeInTheDocument();
      expect(await screen.findByText(peopleCountLabel)).toBeInTheDocument();
    });
  });
});
