import React, { memo } from 'react';
import * as S from './quests-list.styled';
import { Quest } from '../../../../models/quest';
import QuestCard from '../quest-card/quest-card';
import { QuestType, TabsInfo } from '../../../../constants';

const NO_QUEST_MESSAGE_ALL = 'К сожалению на данный момент у нас нет квестов';
const NO_QUEST_MESSAGE = 'К сожалению на данный момент у нас нет квестов по тематике ';

type Props = {
  quests: Quest[],
  questType: QuestType,
}

function QuestsList({
  quests,
  questType,
}: Props): JSX.Element {

  if (!quests.length) {
    let message = '';

    questType === QuestType.All
      ? message = NO_QUEST_MESSAGE_ALL
      : message = `${NO_QUEST_MESSAGE}${TabsInfo[questType].title}`;

    return <S.Message>{message}</S.Message>;
  }

  return (
    <S.QuestsList>
      {quests.map((quest) => <QuestCard key={quest.id} quest={quest} />)}
    </S.QuestsList>
  );
}

export default memo(QuestsList);
