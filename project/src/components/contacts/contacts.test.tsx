import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { createMemoryHistory } from 'history';
import { ContactInfo } from '../../constants';
import { appTheme } from '../app/common';
import Contacts from './contacts';

const history = createMemoryHistory();

describe('Component: Contacts', () => {
  it('should render correctly', async () => {
    const title = /Контакты/;
    const subtext = /квесты в Санкт-Петербурге/;
    const screen = render(
      <Router history={history}>
        <ThemeProvider theme={appTheme}>
          <Contacts />
        </ThemeProvider>
      </Router>,
    );

    expect(screen.getAllByText(title).length).toBe(2);
    expect(screen.getByText(subtext)).toBeInTheDocument();
    expect(screen.getByText(`${ContactInfo.Address.value.cityName},`)).toBeInTheDocument();
    expect(screen.getByText(ContactInfo.Address.title)).toBeInTheDocument();
    expect(screen.getByText(ContactInfo.Email.title)).toBeInTheDocument();
    expect(screen.getByText(ContactInfo.Email.value)).toBeInTheDocument();
    expect(screen.getByText(ContactInfo.Phone.title)).toBeInTheDocument();
    expect(screen.getByText(ContactInfo.Regime.value)).toBeInTheDocument();
    expect(screen.getByText(ContactInfo.Regime.title)).toBeInTheDocument();
  });
});
