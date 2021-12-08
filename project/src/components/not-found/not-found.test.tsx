import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../constants';
import { testState } from '../../setupTests';
import { thunkApi } from '../../store/store';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import NotFound from './not-found';

const middleware = [ thunk.withExtraArgument(thunkApi) ];

const mockStore = configureMockStore(middleware);
const store = mockStore(testState);
const history = createMemoryHistory();

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const notFoundCode = /404/;
    const title = /Мы не нашли страницу который вы запрашиваете/;
    const homeLinkText =  /Вернуться домой/;

    const screen = render(
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={appTheme}>
            <NotFound />
          </ThemeProvider>
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
