import { GetSingleEpisodeRepository } from "@/domain/contracts/repository";
import { Episode } from "@/domain/entities";

export class GetSingleEpisodeInMemory implements GetSingleEpisodeRepository {
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
	];

	get(input: { epId: number }): Promise<Episode> {
		return new Promise((resolve, reject) => {
			resolve(this.episodes[input.epId]);
		});
	}
}