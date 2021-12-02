import { Quest } from '../models/quest';

const mapQuestToClient = (quest: Quest): Quest => ({
  ...quest,
  id: quest.id.toString(),
});

const mapQuestsToClient = (quests: Quest[]): Quest[] =>
  quests.map(mapQuestToClient);

export {
  mapQuestToClient,
  mapQuestsToClient
};
