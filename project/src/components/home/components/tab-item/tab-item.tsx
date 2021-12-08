import React, { memo } from 'react';
import { QuestType } from '../../../../constants';
import * as S from './tab-item.styled';

type Props = {
  type: QuestType,
  title: string,
  isActive: boolean,
  icon: string,
  onTabClick: (questType: QuestType) => void,
}

function TabItem({
  type,
  icon,
  title,
  isActive,
  onTabClick,
}: Props): JSX.Element {

  const handleTabClick = () => {
    onTabClick(type);
  };

  return (
    <S.TabItem onClick={handleTabClick}>
      <S.TabBtn active={isActive}>
        <S.TabIcon src={icon} alt={title} />
        <S.TabTitle>{title}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
}

export default memo(TabItem);
