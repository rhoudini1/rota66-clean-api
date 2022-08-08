import { GetRandomEpisodeRepository } from "@/domain/contracts/repository";
import { Episode } from "@/domain/entities";

export class GetRandomEpisodeInMemory implements GetRandomEpisodeRepository {
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

	async get() {
		const random = Math.floor(Math.random() * this.episodes.length);
		return this.episodes[random];
	}
}