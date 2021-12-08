import { act, render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { getFakeQuests } from '../../../../test-utils/mock-data';
import { appTheme } from '../../../app/common';
import { QuestType, TabsInfo } from '../../../../constants';
import QuestsList from './quests-list';

const history = createMemoryHistory();

describe('Component: QuestsList', () => {
  it('should render correctly', async () => {
    await act(async () => {
      const fakeQuests = getFakeQuests();

      const screen = render(
        <Router history={history}>
          <ThemeProvider theme={appTheme}>
            <QuestsList quests={fakeQuests} questType={QuestType.All}/>
          </ThemeProvider>
        </Router>,
      );

      fakeQuests.forEach(({ title }) => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });
  });

  it('should render cap message when no quest and All tab checked', async () => {
    await act(async () => {
      const NO_QUEST_MESSAGE_ALL = 'К сожалению на данный момент у нас нет квестов';

      const screen = render(
        <Router history={history}>
          <ThemeProvider theme={appTheme}>
            <QuestsList quests={[]} questType={QuestType.All}/>
          </ThemeProvider>
        </Router>,
      );

      expect(screen.getByText(NO_QUEST_MESSAGE_ALL)).toBeInTheDocument();
    });
  });

  it('should render cap message when no quest and Adventure tab checked', async () => {
    await act(async () => {
      const NO_QUEST_MESSAGE = 'К сожалению на данный момент у нас нет квестов по тематике ';
      const message = `${NO_QUEST_MESSAGE}${TabsInfo[QuestType.Adventures].title}`;

      const screen = render(
        <Router history={history}>
          <ThemeProvider theme={appTheme}>
            <QuestsList quests={[]} questType={QuestType.Adventures}/>
          </ThemeProvider>
        </Router>,
      );

      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });
});
