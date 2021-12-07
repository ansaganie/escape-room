import { Quest } from '../models/quest';

const mapQuestToClient = (quest: Quest): Quest => ({
  ...quest,
  id: quest.id.toString(),
  coverImg: `../${quest.coverImg}`,
});

const mapQuestsToClient = (quests: Quest[]): Quest[] =>
  quests.map(mapQuestToClient);

export {
  mapQuestToClient,
  mapQuestsToClient
};
