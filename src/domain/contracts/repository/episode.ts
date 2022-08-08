import { Episode } from "@/domain/entities";

export interface GetEpisodesRepository {
  get: (input: GetEpisodesRepository.Input) => Promise<GetEpisodesRepository.Output>;
}

export interface GetSingleEpisodeRepository {
  get: (input: GetSingleEpisodeRepository.Input) => Promise<GetSingleEpisodeRepository.Output>;
}

export interface GetEpisodesByChapterRepository {
  get: (input: GetEpisodesByChapterRepository.Input) => Promise<GetEpisodesByChapterRepository.Output>;
}

export interface GetRandomEpisodeRepository {
  get: (input: GetRandomEpisodeRepository.Input) => Promise<GetRandomEpisodeRepository.Output>;
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

export namespace GetEpisodesByChapterRepository {
  export type Input = { bookId: number; bookChapter?: string };
  export type Output = Episode[];
}

export namespace GetRandomEpisodeRepository {
  export type Input = void;
  export type Output = Episode;
}
