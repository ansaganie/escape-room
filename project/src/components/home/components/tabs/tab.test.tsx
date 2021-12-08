import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { QuestType, TabsInfo } from '../../../../constants';
import { appTheme } from '../../../app/common';
import Tabs from './tabs';

describe('Component: Tabs', () => {
  it('should render correctly', async () => {
    await act(async () => {
      const setQuestType = jest.fn();

      const screen = render(
        <ThemeProvider theme={appTheme}>
          <Tabs
            onTabClick={setQuestType}
            selectedTab={QuestType.All}
          />
        </ThemeProvider>,
      );

      Object.values(TabsInfo).forEach((tab) => {
        expect(screen.getByText(tab.title)).toBeInTheDocument();
      });
    });
  });

  it('should call setQuestType with given quest type', async () => {
    await act(async () => {
      const tab = TabsInfo.adventures;
      const setQuestType = jest.fn();

      const screen = render(
        <ThemeProvider theme={appTheme}>
          <Tabs
            onTabClick={setQuestType}
            selectedTab={QuestType.All}
          />
        </ThemeProvider>,
      );

      const button = screen.getByText(tab.title).parentElement;

      if (button) {
        userEvent.click(button);
      }

      expect(setQuestType).toBeCalled();
      expect(setQuestType).toBeCalledTimes(1);
      expect(setQuestType).toBeCalledWith(tab.type);
    });
  });
});
