import { Episode } from "@/domain/entities";

describe("Episode", () => {
  it("Should set a new episode", () => {
    const props = {
      epId: 1,
      epTitle: "any-title",
      epDescription: "any-description",
      linkId: "any-link",
      bookId: 1,
      bookTitle: "any-book",
      bookChapter: "1, 2, 3",
    };

    const sut = new Episode(props);

    expect(sut.props).toBeDefined();
    expect(sut.props.epId).toEqual(1);
    expect(sut.props.epTitle).toEqual("any-title");
    expect(sut.props.epDescription).toEqual("any-description");
    expect(sut.props.linkId).toEqual("any-link");
    expect(sut.props.bookId).toEqual(1);
    expect(sut.props.bookTitle).toEqual("any-book");
    expect(sut.props.bookChapter).toEqual("1, 2, 3");
  });
});
