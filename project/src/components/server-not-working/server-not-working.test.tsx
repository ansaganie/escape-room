import { render } from '@testing-library/react';
import { testState } from '../../setupTests';
import { deepClone } from '../../test-utils/common';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import ServerNotWorking from './server-not-working';

describe('Component: ServerNotWorking', () => {
  it('should render correctly', () => {
    const title = /Наш сайт временно не работает, попробуйте зайти позже/;

    const state = deepClone(testState);
    state.app.serverNotWorking = true;

    const screen = render(
      <ThemeProvider theme={appTheme}>
        <ServerNotWorking />
      </ThemeProvider>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
