import { useEffect, useState } from 'react';
import { Quest, QuestId } from '../models/quest';
import { getAllQuests, getQuestLoading, getNotFoundQuestId } from '../store/quest/quest-selectors';
import { fetchQuest } from '../store/quest/quest-thunks';
import { useAppDispatch, useAppSelector } from './redux';

type UseQuestLoader = [quest: Quest | null, loading: boolean, notFound: boolean ];

const useQuestLoader = (questId: QuestId): UseQuestLoader => {
  const dispatch = useAppDispatch();
  const quests = useAppSelector(getAllQuests);
  const loading = useAppSelector(getQuestLoading);
  const notFoundId = useAppSelector(getNotFoundQuestId);
  const [ quest, setQuest ] = useState<Quest | null>(null);

  useEffect(() => {
    const result =quests.find(({ id }) => id === questId);

    if (result) {
      setQuest(result);
    } else {
      dispatch(fetchQuest(questId));
    }
  }, [ quests, questId, dispatch ]);

  return [ quest, loading, notFoundId === questId ];
};

export default useQuestLoader;
