import { act, render } from '@testing-library/react';
import { Route, Router, Switch } from 'react-router';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { getFakeQuest } from '../../../../test-utils/mock-data';
import { appTheme } from '../../../app/common';
import { AppRoute, QuestLevelTitle } from '../../../../constants';
import QuestCard from './quest-card';
import userEvent from '@testing-library/user-event';


const history = createMemoryHistory();

describe('Component: QuestCard', () => {
  it('should render correctly', async () => {
    await act(async () => {
      const fakeQuest = getFakeQuest();
      const altText = new RegExp(`квест ${fakeQuest.title}`);
      const {
        title,
        peopleCount: [ min, max ],
        level,
      } = fakeQuest;
      const peopleCountText = new RegExp(`${min}–${max} чел`);

      const screen = render(
        <Router history={history}>
          <ThemeProvider theme={appTheme}>
            <QuestCard quest={fakeQuest} />
          </ThemeProvider>
        </Router>,
      );

      expect(screen.getByAltText(altText)).toBeInTheDocument();
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(peopleCountText)).toBeInTheDocument();
      expect(screen.getByText(QuestLevelTitle[level])).toBeInTheDocument();
    });
  });

  it('should render Quest Page when click link', async () => {
    await act(async () => {
      const fakeQuest = getFakeQuest();
      const questPageText = 'This is quest page';

      history.push('');

      const screen = render(
        <Router history={history}>
          <ThemeProvider theme={appTheme}>
            <Switch>
              <Route path={AppRoute.getQuestLink(fakeQuest.id)}>
                <h1>{questPageText}</h1>
              </Route>
            </Switch>
            <QuestCard quest={fakeQuest} />
          </ThemeProvider>
        </Router>,
      );

      userEvent.click(screen.getByRole('link'));
      expect(await screen.findByText(questPageText)).toBeInTheDocument();
    });
  });
});
