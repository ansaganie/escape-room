import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { TabsInfo } from '../../../../constants';
import { appTheme } from '../../../app/common';
import TabItem from './tab-item';

describe('Component: TabItem', () => {
  it('should render correctly', async () => {
    await act(async () => {
      const tab = TabsInfo.adventures;
      const setQuestType = jest.fn();

      const screen = render(
        <ThemeProvider theme={appTheme}>
          <TabItem
            type={tab.type}
            title={tab.title}
            isActive={false}
            icon={tab.icon}
            onTabClick={setQuestType}
          />
        </ThemeProvider>,
      );

      expect(screen.getByText(tab.title)).toBeInTheDocument();
      expect(screen.getByAltText(tab.title)).toBeInTheDocument();
    });
  });

  it('should call setQuestType with given quest type', async () => {
    await act(async () => {
      const tab = TabsInfo.adventures;
      const setQuestType = jest.fn();

      const screen = render(
        <ThemeProvider theme={appTheme}>
          <TabItem
            type={tab.type}
            title={tab.title}
            isActive={false}
            icon={tab.icon}
            onTabClick={setQuestType}
          />
        </ThemeProvider>,
      );

      const button = screen.getByRole('button');
      userEvent.click(button);

      expect(setQuestType).toBeCalled();
      expect(setQuestType).toBeCalledTimes(1);
      expect(setQuestType).toBeCalledWith(tab.type);
    });
  });
});
