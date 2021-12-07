import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../constants';
import { testState } from '../../setupTests';
import { thunkApi } from '../../store/store';
import { getFakeQuest } from '../../test-utils/mock-data';
import { deepClone } from '../../test-utils/common';
import App from './app';

const middleware = [ thunk.withExtraArgument(thunkApi) ];

const mockStore = configureMockStore(middleware);
const store = mockStore(testState);
const history = createMemoryHistory();

describe('Component: App, App routing', () => {
  it('should render Home screen', () => {
    const title = /Выберите тематику/;
    const subtext = /квесты в Санкт-Петербурге/;

    history.push(AppRoute.Home);

    const screen = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtext)).toBeInTheDocument();
  });

  it('should render Contacts screen', () => {
    const title = /Контакты/;
    const titleCount = 2;
    const subtext = /квесты в Санкт-Петербурге/;
    const address = /Адрес/;
    const regime = /Режим работы/;
    const phone = /Телефон/;
    const email = /E-mail/;

    history.push(AppRoute.Contacts);

    const screen = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(title).length).toBe(titleCount);
    expect(screen.getByText(subtext)).toBeInTheDocument();
    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(regime)).toBeInTheDocument();
    expect(screen.getByText(phone)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
  });

  it('should render DetailedQuest screen', () => {
    const fakeQuest = getFakeQuest();
    const state = deepClone(testState);
    state.quest.quests = [ fakeQuest ];

    history.push(AppRoute.getQuestLink(fakeQuest.id));

    act(async () => {
      const screen = render(
        <Provider store={mockStore(state)}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>,
      );

      expect(await screen.findByText(fakeQuest.duration)).toBeInTheDocument();
      expect(await screen.findByText(fakeQuest.title)).toBeInTheDocument();
      expect(await screen.findByText(fakeQuest.description)).toBeInTheDocument();
    });
  });

  it('should render NotFound screen', () => {
    const fakeRoute = 'bla-bla';
    const notFoundCode = /404/;
    const title = /Мы не нашли страницу который вы запрашиваете/;
    const homeLinkText =  /Вернуться домой/;

    history.push(fakeRoute);

    act(async () => {
      const screen = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>,
      );

      const homeLink = screen.getByText(homeLinkText);

      expect(screen.getByText(notFoundCode)).toBeInTheDocument();
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(homeLinkText)).toBeInTheDocument();

      userEvent.click(homeLink);

      expect(history.location.pathname).toBe(AppRoute.Home);
    });
  });

  it('should render ServerNotWorking screen', () => {
    const title = /Наш сайт временно не работает, попробуйте зайти позже/;

    const state = deepClone(testState);
    state.app.serverNotWorking = true;

    act(async () => {
      const screen = render(
        <Provider store={mockStore(state)}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>,
      );

      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
