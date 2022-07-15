import { Episode } from "@/domain/entities";

export type GetEpisodes = (params: {
  offset?: number;
  limit?: number;
}) => Promise<Episode[]>;

// Helping setup function
type Setup = (epRepository: GetEpisodesRepository) => GetEpisodes;

export const setupGetEpisodes: Setup = (epRepository) => async (params) => {
  const episodes = await epRepository.get({
    offset: params.offset,
    limit: params.limit,
  });

  return episodes;
};
