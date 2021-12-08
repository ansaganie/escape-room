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
  DetailedQuest: '/detailed-quest/:questId',
  Newcomers: '/for-newcomers',
  Reviews: '/reviews',
  Contacts: '/contacts',
  getQuestLink: (questId: QuestId): string => `/detailed-quest/${questId}`,
};

const BackendRoute = {
  Quests: '/quests',
  Orders: '/orders',
  getQuestLink: (questId: QuestId): string => `/quests/${questId}`,
};

const Menu = [
  {
    link: AppRoute.Home,
    title: 'Квесты',
  },
  {
    link: AppRoute.Newcomers,
    title: 'Новичкам',
  },
  {
    link: '/reviews',
    title: 'Отзывы',
  },
  {
    link: AppRoute.Contacts,
    title: 'Контакты',
  },
];

const TabsInfo = {
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


const ContactInfo = {
  Address: {
    title: 'Адрес',
    value: {
      cityName: 'Санкт-Петербург',
      streetName: 'Набережная реки Карповка',
      houseNumber: 5,
    },
  },
  Regime: {
    title: 'Режим работы',
    value: 'Ежедневно, с 9:00 до 20:00',
  },
  Phone: {
    title: 'Телефон',
    value: '8 (800) 333-55-99',
  },
  Email: {
    title: 'E-mail',
    value: 'info@escape-room.ru',
  },
  Location: {
    title: 'Координаты',
    value: {
      lat: 59.9681,
      lng: 30.3163,
      zoom: 17,
    },
  },
};

enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

const QuestLevelTitle = {
  [QuestLevel.Easy]: 'простой',
  [QuestLevel.Medium]: 'средний',
  [QuestLevel.Hard]: 'сложный',
};

export {
  AXIOS_DEFAULT_CONFIG,
  HttpCode,
  QuestType,
  AppRoute,
  BackendRoute,
  Menu,
  TabsInfo,
  ContactInfo,
  QuestLevel,
  QuestLevelTitle
};
