import { QuestId } from './models/quest';

const BACKEND_URL = 'http://localhost:3001';
const TIMEOUT = 5000;

const AXIOS_DEFAULT_CONFIG = {
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
};

enum HttpCode {
  ServerErrorMin = 500,
  ServerErrorMax = 599,
  NotFound = 404,
}

enum QuestType {
  All = 'all',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  Adventures = 'adventures',
  SciFi = 'sci-fi',
}

const AppRoute = {
  Home: '/',
  DetailedQuest: '/quest/:questId',
  Contacts: '/contacts',
};

const BackendRoutes = {
  Quests: '/quests',
  Orders: '/orders',
  getQuestLink: (questId: QuestId): string => `/quests/${questId}`,
};

export {
  AXIOS_DEFAULT_CONFIG,
  HttpCode,
  QuestType,
  AppRoute,
  BackendRoutes
};
