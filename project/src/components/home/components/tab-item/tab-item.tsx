import React, { memo } from 'react';
import { QuestType } from '../../../../constants';
import * as S from './tab-item.styled';

type Props = {
  type: QuestType,
  title: string,
  isActive: boolean,
  icon: string,
  setQuestType: (questType: QuestType) => void,
}

function TabItem({
  type,
  icon,
  title,
  isActive,
  setQuestType,
}: Props): JSX.Element {

  const handleTabClick = () => {
    setQuestType(type);
  };

  return (
    <S.TabItem onClick={handleTabClick}>
      <S.TabBtn active={isActive}>
        <S.TabIcon width="40" height="30" src={icon} alt={title} />
        <S.TabTitle>{title}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
}

export default memo(TabItem);
