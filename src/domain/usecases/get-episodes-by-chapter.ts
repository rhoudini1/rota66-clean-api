import { Episode } from "@/domain/entities";
import { GetEpisodesByChapterRepository } from "@/domain/contracts/repository";

export type GetEpisodesByChapter = (params: { bookId: number; bookChapter?: string }) => Promise<Episode[]>;

type Setup = (epRepository: GetEpisodesByChapterRepository) => GetEpisodesByChapter;

export const setupGetEpisodesByChapter: Setup = (epRepository) => async (params) => {
	const episodes = await epRepository.get({ bookId: params.bookId, bookChapter: params.bookChapter });
	if (!episodes) {
		throw new Error("No episodes found.");
	}
	return episodes;
};
