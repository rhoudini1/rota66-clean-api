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

    expect(sut).toBeDefined();
    expect(sut.epId).toEqual(1);
    expect(sut.epTitle).toEqual("any-title");
    expect(sut.epDescription).toEqual("any-description");
    expect(sut.linkId).toEqual("any-link");
    expect(sut.bookId).toEqual(1);
    expect(sut.bookTitle).toEqual("any-book");
    expect(sut.bookChapter).toEqual("1, 2, 3");
  });
});
