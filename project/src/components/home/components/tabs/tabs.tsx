import React, { useCallback } from 'react';
import { QuestType } from '../../../../constants';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { getQuestType } from '../../../../store/quest/quest-selectors';
import { setQuestType } from '../../../../store/quest/quest-slice';
import TabsPure from './tabs-pure';

function Tabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentQuestType = useAppSelector(getQuestType);

  const setCurrentQuestType = useCallback((questType: QuestType) => {
    dispatch(setQuestType(questType));
  }, [ dispatch ]);

  return (
    <TabsPure
      setQuestType={setCurrentQuestType}
      activeQuestType={currentQuestType}
    />
  );
}

export default Tabs;
