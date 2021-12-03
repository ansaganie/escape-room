import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllQuests, getQuests, getQuestType } from '../../store/quest/quest-selectors';
import * as S from './home.styled';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext
} from '../common/common';
import { QuestsCatalog } from './components/components';
import { fetchQuests } from '../../store/quest/quest-thunks';
import { setQuestType } from '../../store/quest/quest-slice';
import { QuestType } from '../../constants';

function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const quests = useAppSelector(getQuests);
  const allQuests = useAppSelector(getAllQuests);
  const currentQuestType = useAppSelector(getQuestType);
  const [ questsLoading, setQuestsLoading] = useState(true);

  useEffect(() => {
    if (!allQuests.length) {
      dispatch(fetchQuests())
        .finally(() => {
          setQuestsLoading(false);
        });
    } else {
      setQuestsLoading(false);
    }
  }, [ dispatch, allQuests ]);

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
