import { GetEpisodesByChapterRepository } from "@/domain/contracts/repository";
import { Episode } from "@/domain/entities";

export class GetEpisodesByChapterInMemory implements GetEpisodesByChapterRepository {
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
			bookChapter: "2, 3, 4",
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

	async get(input: { bookId: number; bookChapter?: string }) {
		let episodes = this.episodes.filter((ep) => ep.bookId === input.bookId);
		if (input.bookChapter) {
			episodes = episodes.filter((ep) => {
				const arrayOfChapters: string[] = ep.bookChapter.split(", ");
				return arrayOfChapters.includes(input.bookChapter!);
			});
		}
		return episodes;
	}
}
