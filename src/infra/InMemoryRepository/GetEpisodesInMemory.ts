import { GetEpisodesRepository } from "@/domain/contracts/repository";
import { Episode } from "@/domain/entities";

export class GetEpisodesInMemory implements GetEpisodesRepository {
	private readonly episodes: Episode[] = [
		new Episode({
			epId: 1,
			epTitle: "First Episode",
			epDescription: "Description",
			linkId: "episode-number-1",
			bookId: 1,
			bookTitle: "Gênesis",
			bookChapter: "1",
		}),
		new Episode({
			epId: 2,
			epTitle: "Second Episode",
			epDescription: "Another description",
			linkId: "episode-number-2",
			bookId: 1,
			bookTitle: "Gênesis",
			bookChapter: "2",
		}),
		new Episode({
			epId: 3,
			epTitle: "Third Episode",
			epDescription: "Something somewhat someday",
			linkId: "episode-number-3",
			bookId: 2,
			bookTitle: "Êxodo",
			bookChapter: "1",
		}),
		new Episode({
			epId: 4,
			epTitle: "Fourth Episode",
			epDescription: "Lorem ipsum amet dollor",
			linkId: "episode-number-4",
			bookId: 2,
			bookTitle: "Êxodo",
			bookChapter: "2, 3",
		}),
		new Episode({
			epId: 5,
			epTitle: "Fifth Episode",
			epDescription: "My favorite episode",
			linkId: "episode-number-5",
			bookId: 2,
			bookTitle: "Êxodo",
			bookChapter: "4",
		}),
	];

	async get(input: {offset?: number, limit?: number}) {
		if (input.offset && input.limit) {
			return this.episodes.slice(input.offset - 1, input.offset - 1 + input.limit);
		} else if (input.offset) {
			return this.episodes.slice(input.offset - 1);
		} else if (input.limit) {
			return this.episodes.slice(0, input.limit - 1);
		}
		return this.episodes;
	}
}