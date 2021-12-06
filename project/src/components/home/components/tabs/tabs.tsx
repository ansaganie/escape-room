import React, { memo } from 'react';
import * as S from './tabs.styled';
import { QuestType, TABS } from '../../../../constants';
import TabItem from '../tab-item/tab-item';

type Props = {
  setQuestType: (questType: QuestType) => void,
  questType: QuestType,
}

function Tabs({ setQuestType, questType}: Props): JSX.Element {
  return (
    <S.Tabs>
      {Object.values(TABS).map(({ type, title, icon }) => (
        <TabItem
          key={type}
          type={type}
          title={title}
          isActive={questType === type}
          setQuestType={setQuestType}
          icon={icon}
        />
      ))}
    </S.Tabs>
  );
}

export default memo(Tabs);
