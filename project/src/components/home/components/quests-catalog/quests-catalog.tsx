import React, { memo } from 'react';
import Tabs from '../tabs/tabs';
import { Quest } from '../../../../models/quest';
import { QuestType } from '../../../../constants';
import Loader from '../../../common/loader/loader';
import QuestsList from '../quests-list/quests-list';

type Props = {
  quests: Quest[],
  setQuestType: (questType: QuestType) => void,
  questType: QuestType,
  loading: boolean,
}

function QuestsCatalog({
  quests,
  setQuestType,
  questType,
  loading,
}: Props): JSX.Element {
  return (
    <>
      <Tabs
        setQuestType={setQuestType}
        questType={questType}
      />
      {loading
        ? <Loader />
        : <QuestsList quests={quests} questType={questType} />}
    </>
  );
}

export default memo(QuestsCatalog);
