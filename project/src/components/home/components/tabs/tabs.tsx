import React, { memo } from 'react';
import * as S from './tabs.styled';
import { QuestType, TabsInfo } from '../../../../constants';
import TabItem from '../tab-item/tab-item';

type Props = {
  onTabClick: (questType: QuestType) => void,
  selectedTab: QuestType,
}

function Tabs({ onTabClick, selectedTab}: Props): JSX.Element {
  return (
    <S.Tabs>
      {Object.values(TabsInfo).map(({ type, title, icon }) => (
        <TabItem
          key={type}
          type={type}
          title={title}
          isActive={selectedTab === type}
          onTabClick={onTabClick}
          icon={icon}
        />
      ))}
    </S.Tabs>
  );
}

export default memo(Tabs);
