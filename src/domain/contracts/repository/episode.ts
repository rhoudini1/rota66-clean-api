import { Episode } from "@/domain/entities";

export interface GetEpisodesRepository {
	get: (input: GetEpisodesRepository.Input) => Promise<GetEpisodesRepository.Output>;
}

// Defines types for input and output
export namespace GetEpisodesRepository {
	export type Input = { offset?: number; limit?: number };
	export type Output = Episode[];
}