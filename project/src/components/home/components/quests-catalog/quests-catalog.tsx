import React, { memo } from 'react';
import TabsInfo from '../tabs/tabs';
import { Quest } from '../../../../models/quest';
import { QuestType } from '../../../../constants';
import Loader from '../../../common/loader/loader';
import QuestsList from '../quests-list/quests-list';

type Props = {
  quests: Quest[],
  setQuestType: (questType: QuestType) => void,
  selectedTab: QuestType,
  loading: boolean,
}

function QuestsCatalog({
  quests,
  setQuestType,
  selectedTab,
  loading,
}: Props): JSX.Element {
  return (
    <>
      <TabsInfo
        setQuestType={setQuestType}
        selectedTab={selectedTab}
      />
      {loading
        ? <Loader />
        : <QuestsList quests={quests} questType={selectedTab} />}
    </>
  );
}

export default memo(QuestsCatalog);
