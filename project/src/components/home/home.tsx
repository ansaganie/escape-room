import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as S from './home.styled';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext
} from '../common/common';
import { QuestsCatalog } from './components/components';
import { setQuestType } from '../../store/quest/quest-slice';
import { QuestType } from '../../constants';
import usePageTitle from '../../hooks/use-page-title';
import { fetchQuests } from '../../store/quest/quest-thunks';
import { getQuests, getQuestType } from '../../store/quest/quest-selectors';

const PAGE_TITLE = 'Escape Room: квесты в Санкт-Петербурге';

function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const quests = useAppSelector(getQuests);
  const currentQuestType = useAppSelector(getQuestType);
  const [ questsLoading, setQuestsLoading] = useState(true);

  usePageTitle(PAGE_TITLE);

  useEffect(() => {
    dispatch(fetchQuests())
      .finally(() => {
        setQuestsLoading(false);
      });
  }, [ dispatch ]);

  const setCurrentQuestType = useCallback((questType: QuestType) => {
    dispatch(setQuestType(questType));
  }, [ dispatch ]);

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog
          quests={quests}
          setQuestType={setCurrentQuestType}
          questType={currentQuestType}
          loading={questsLoading}
        />
      </S.Main>
    </MainLayout>
  );
}

export default HomePage;
