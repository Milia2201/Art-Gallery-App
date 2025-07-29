import toggleFavourite from "./toggleFavourites";

describe("toggleFavourite", () => {
  const piece = { slug: "test-art" };

  it("adds the piece slug if not in favourites", () => {
    const setFavourites = jest.fn();
    const favourites = [];
    toggleFavourite(piece, favourites, setFavourites);
    expect(setFavourites).toHaveBeenCalledWith(["test-art"]);
  });

  it("removes the piece slug if already in favourites", () => {
    const setFavourites = jest.fn();
    const favourites = ["test-art", "other-art"];
    toggleFavourite(piece, favourites, setFavourites);
    expect(setFavourites).toHaveBeenCalledWith(["other-art"]);
  });
});