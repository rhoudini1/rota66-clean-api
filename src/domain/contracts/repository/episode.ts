import { Episode } from "@/domain/entities";

export interface GetEpisodesRepository {
  get: (input: GetEpisodesRepository.Input) => Promise<GetEpisodesRepository.Output>;
}

export interface GetSingleEpisodeRepository {
  get: (input: GetSingleEpisodeRepository.Input) => Promise<GetSingleEpisodeRepository.Output>;
}

export interface GetEpisodesByChapter {
  get: (input: GetEpisodesByChapter.Input) => Promise<GetEpisodesByChapter.Output>;
}

export interface GetRandomEpisode {
  get: (input: GetRandomEpisode.Input) => Promise<GetRandomEpisode.Output>;
}

// Defines types for input and output
export namespace GetEpisodesRepository {
  export type Input = { offset?: number; limit?: number };
  export type Output = Episode[];
}

export namespace GetSingleEpisodeRepository {
  export type Input = { epId: number };
  export type Output = Episode;
}

export namespace GetEpisodesByChapter {
  export type Input = { bookId: number; bookChapter: string };
  export type Output = Episode[];
}

export namespace GetRandomEpisode {
  export type Input = void;
  export type Output = Episode;
}
