import React, { memo } from 'react';
import * as S from './tabs.styled';
import { QuestType, TabsInfo } from '../../../../constants';
import TabItem from '../tab-item/tab-item';

type Props = {
  setQuestType: (questType: QuestType) => void,
  selectedTab: QuestType,
}

function Tabs({ setQuestType, selectedTab}: Props): JSX.Element {
  return (
    <S.Tabs>
      {Object.values(TabsInfo).map(({ type, title, icon }) => (
        <TabItem
          key={type}
          type={type}
          title={title}
          isActive={selectedTab === type}
          setQuestType={setQuestType}
          icon={icon}
        />
      ))}
    </S.Tabs>
  );
}

export default memo(Tabs);
