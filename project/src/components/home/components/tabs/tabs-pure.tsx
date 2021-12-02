import React from 'react';
import * as S from './tabs.styled';
import IconAllQuests from '../../../../assets/img/icon-all-quests.svg';
import IconAdventures from '../../../../assets/img/icon-adventures.svg';
import IconHorrors from '../../../../assets/img/icon-horrors.svg';
import IconMystic from '../../../../assets/img/icon-mystic.svg';
import IconDetective from '../../../../assets/img/icon-detective.svg';
import IconSciFi from '../../../../assets/img/icon-sci-fi.svg';
import { QuestType } from '../../../../constants';
import TabItem from '../tab-item/tab-item';

const TABS = [
  {
    type: QuestType.All,
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  {
    type: QuestType.Adventures,
    title: 'Приключения',
    icon: IconAdventures,
  },
  {
    type: QuestType.Horror,
    title: 'Ужасы',
    icon: IconHorrors,
  },
  {
    type: QuestType.Mystic,
    title: 'Мистика',
    icon: IconMystic,
  },
  {
    type: QuestType.Detective,
    title: 'Детектив',
    icon: IconDetective,
  },
  {
    type: QuestType.SciFi,
    title: 'Sci-fi',
    icon:IconSciFi ,
  },
];

type Props = {
  setQuestType: (questType: QuestType) => void,
  activeQuestType: QuestType,
}

function TabsPure({ setQuestType, activeQuestType}: Props): JSX.Element {
  return (
    <S.Tabs>
      {TABS.map(({ type, title, icon }) => (
        <TabItem
          key={type}
          type={type}
          title={title}
          isActive={activeQuestType === type}
          setQuestType={setQuestType}
          icon={icon}
        />
      ))}
    </S.Tabs>
  );
}

export default TabsPure;
