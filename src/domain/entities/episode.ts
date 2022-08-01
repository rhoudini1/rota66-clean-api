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
  public readonly epId: number;
  public readonly epTitle: string;
  public readonly epDescription: string;
  public readonly linkId: string;
  public readonly bookId: number;
  public readonly bookTitle: string;
  public readonly bookChapter: string;

  constructor(props: EpisodeProps) {
    this.epId = props.epId;
    this.epTitle = props.epTitle;
    this.epDescription = props.epDescription;
    this.linkId = props.linkId;
    this.bookId = props.bookId;
    this.bookTitle = props.bookTitle;
    this.bookChapter = props.bookChapter;
  }
}
