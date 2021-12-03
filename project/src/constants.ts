import { QuestId } from './models/quest';
import IconAllQuests from './assets/img/icon-all-quests.svg';
import IconAdventures from './assets/img/icon-adventures.svg';
import IconHorrors from './assets/img/icon-horrors.svg';
import IconMystic from './assets/img/icon-mystic.svg';
import IconDetective from './assets/img/icon-detective.svg';
import IconSciFi from './assets/img/icon-sci-fi.svg';

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
  getQuestLink: (questId: QuestId): string => `/quest/${questId}`,
};

const BackendRoutes = {
  Quests: '/quests',
  Orders: '/orders',
  getQuestLink: (questId: QuestId): string => `/quests/${questId}`,
};

const TABS = {
  [QuestType.All]: {
    type: QuestType.All,
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  [QuestType.Adventures]: {
    type: QuestType.Adventures,
    title: 'Приключения',
    icon: IconAdventures,
  },
  [QuestType.Horror]: {
    type: QuestType.Horror,
    title: 'Ужасы',
    icon: IconHorrors,
  },
  [QuestType.Mystic]: {
    type: QuestType.Mystic,
    title: 'Мистика',
    icon: IconMystic,
  },
  [QuestType.Detective]: {
    type: QuestType.Detective,
    title: 'Детектив',
    icon: IconDetective,
  },
  [QuestType.SciFi]: {
    type: QuestType.SciFi,
    title: 'Sci-fi',
    icon:IconSciFi ,
  },
};

export {
  AXIOS_DEFAULT_CONFIG,
  HttpCode,
  QuestType,
  AppRoute,
  BackendRoutes,
  TABS
};
