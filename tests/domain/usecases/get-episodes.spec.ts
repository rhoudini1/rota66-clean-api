import { GetEpisodes, setupGetEpisodes } from "@/domain/usecases/get-episodes";
import { GetEpisodesRepository } from "@/domain/contracts/repository/episode";
import { Episode } from "@/domain/entities";

import { mock, MockProxy } from "jest-mock-extended";

describe("CreateEvent", () => {
  let sut: GetEpisodes;
  let episodeRepo: MockProxy<GetEpisodesRepository>;

  let filters: { offset?: number; limit?: number };

  const props = {
    epId: 1,
    epTitle: "any-title",
    epDescription: "any-description",
    linkId: "any-link",
    bookId: 1,
    bookTitle: "any-book",
    bookChapter: "1, 2, 3",
  };

  beforeAll(() => {
    filters = {};

    episodeRepo = mock();
    episodeRepo.get.mockResolvedValue([new Episode(props)]);
  });

  beforeEach(() => {
    sut = setupGetEpisodes(episodeRepo);
  });

  it("should call GetEpisodes with correct params", async () => {
    const episodes = await sut(filters);

    expect(episodeRepo.get).toHaveBeenCalledTimes(1);
    expect(episodeRepo.get).toHaveBeenCalledWith(filters);
    expect(episodes[0]).toBeInstanceOf(Episode);
  });
});
