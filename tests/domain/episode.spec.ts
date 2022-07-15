import { Episode } from "@/domain";

describe("Episode", () => {
  it("Should set episode id", () => {
    const sut = new Episode(1);

    expect(sut.epId).toBeDefined();
    expect(sut.epId).toEqual(1);
  });
});
