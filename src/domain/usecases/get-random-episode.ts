import { Episode } from "@/domain/entities";
import { GetRandomEpisodeRepository } from "@/domain/contracts/repository";

export type GetRandomEpisode = () => Promise<Episode>;

type Setup = (epRepository: GetRandomEpisodeRepository) => GetRandomEpisode;

export const setupGetRandomEpisode: Setup = (epRepository) => async () => {
	const episode = await epRepository.get();
	return episode;
};
