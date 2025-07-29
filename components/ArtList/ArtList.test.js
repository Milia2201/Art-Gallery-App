import { render, screen } from "@testing-library/react";
import ArtList from "./ArtList";

jest.mock("../ArtPiecePreview/ArtPiecePreview", () => {
  return function MockArtPiecePreview({ piece }) {
    return <div data-testid="art-piece-preview">{piece.name}</div>;
  };
});

const mockData = [
  { id: "fav-id", name: "Fav Piece", artist: "Fav Artist", slug: "fav-id" },
  { id: "other-id", name: "Other Piece", artist: "Other Artist", slug: "other-id" },
];

describe("ArtList", () => {
  afterEach(() => {
    jest.resetModules();
  });

  it("renders all pieces if isFavouritesPage is false", () => {
    jest.doMock("use-local-storage", () => () => [[], jest.fn()]);
    const ArtListLocal = require("./ArtList").default;
    render(<ArtListLocal data={mockData} />);
    expect(screen.getByRole("heading", { name: "Fav Piece" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Other Piece" })).toBeInTheDocument();
  });

  it("renders only favourite pieces if isFavouritesPage is true", () => {
    jest.doMock("use-local-storage", () => () => [["fav-id"], jest.fn()]);
    const ArtListLocal = require("./ArtList").default;
    render(<ArtListLocal data={mockData} isFavouritesPage={true} />);
    expect(screen.getByRole("heading", { name: "Fav Piece" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Other Piece" })).not.toBeInTheDocument();
  });

  it("renders nothing if data is undefined", () => {
    jest.doMock("use-local-storage", () => () => [[], jest.fn()]);
    const ArtListLocal = require("./ArtList").default;
    render(<ArtListLocal data={undefined} />);
    expect(screen.queryByTestId("art-piece-preview")).not.toBeInTheDocument();
  });
});