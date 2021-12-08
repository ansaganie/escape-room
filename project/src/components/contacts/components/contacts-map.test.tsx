import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import ContactsMap from './contacts-map';

describe('Component: ContactsMap', () => {
  it('should render correctly', () => {
    const title = /OpenStreetMap/;

    const screen = render(
      <ThemeProvider theme={appTheme}>
        <ContactsMap lat={0} lng={0} zoom={0} />
      </ThemeProvider>,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
