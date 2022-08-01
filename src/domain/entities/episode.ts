type EpisodeProps = {
  epId: number;
  epTitle: string;
  epDescription: string;
  linkId: string;
  bookId: number;
  bookTitle: string;
  bookChapter: string;
};

export class Episode {
  constructor(public props: EpisodeProps) {}
}
