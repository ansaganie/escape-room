import React, { memo } from 'react';
import Tabs from '../tabs/tabs';
import { Quest } from '../../../../models/quest';
import { QuestType } from '../../../../constants';
import Loader from '../../../common/loader/loader';
import QuestsList from '../quests-list/quests-list';

type Props = {
  quests: Quest[],
  onTabClick: (questType: QuestType) => void,
  selectedTab: QuestType,
  loading: boolean,
}

function QuestsCatalog({
  quests,
  onTabClick,
  selectedTab,
  loading,
}: Props): JSX.Element {
  return (
    <>
      <Tabs
        onTabClick={onTabClick}
        selectedTab={selectedTab}
      />
      {loading
        ? <Loader />
        : <QuestsList quests={quests} questType={selectedTab} />}
    </>
  );
}

export default memo(QuestsCatalog);
