import { Episode } from "@/domain/entities";
import { GetSingleEpisodeRepository } from "@/domain/contracts/repository";

export type GetSingleEpisode = (params: { epId: number }) => Promise<Episode>;

type Setup = (epRepository: GetSingleEpisodeRepository) => GetSingleEpisode;

export const setupGetSingleEpisode: Setup = (epRepository) => async (params) => {
  const episode = await epRepository.get({ epId: params.epId });
  if (!episode) {
    throw new Error('Episode not found.');
  }
  return episode;
};
