import { act, render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { getFakeQuests } from '../../../../test-utils/mock-data';
import { appTheme } from '../../../app/common';
import { QuestType } from '../../../../constants';
import { QuestsCatalog } from '../components';

const history = createMemoryHistory();

describe('Component: QuestsCatalog', () => {
  it('should render correctly', async () => {
    await act(async () => {
      const fakeQuests = getFakeQuests();

      const screen = render(
        <Router history={history}>
          <ThemeProvider theme={appTheme}>
            <QuestsCatalog
              loading={false}
              quests={fakeQuests}
              selectedTab={QuestType.All}
              setQuestType={jest.fn()}
            />
          </ThemeProvider>
        </Router>,
      );

      fakeQuests.forEach(({ title }) => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });
  });
});
