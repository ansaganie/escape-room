import { QuestId } from './models/quest';

enum QuestTypes {
  All = 'all',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  Adventures = 'adventures',
  SciFi = 'sci-fi',
}

const BackendRoutes = {
  Quests: '/quests',
  Orders: '/orders',
  getQuestLink: (questId: QuestId): string => `/quests/${questId}`,
};

export {
  QuestTypes,
  BackendRoutes
};
