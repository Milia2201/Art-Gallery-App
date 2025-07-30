import { render, screen, fireEvent } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

const piece = {
  slug: "test-art",
  imageSource: "/test.jpg",
  name: "Test Art",
  artist: "Test Artist",
  year: "2020",
  genre: "Test Genre",
  colors: ["#fff", "#000"],
};

jest.mock("use-local-storage", () => () => [[], jest.fn()]);
jest.mock("../ColorPalette/ColorPalette", () => {
  const MockColorPalette = () => <div data-testid="color-palette" />;
  MockColorPalette.displayName = "MockColorPalette";
  return MockColorPalette;
});
const mockToggleFavourite = jest.fn();
jest.mock("../../scripts/fetcher/toggleFavourites/toggleFavourites", () => ({
  __esModule: true,
  default: (...args) => mockToggleFavourite(...args),
}));

describe("ArtPieceDetails", () => {
  it("renders all details", () => {
    render(<ArtPieceDetails piece={piece} onBack={() => {}} />);
    // Bild
    expect(screen.getByAltText("Test Artist: Test Art")).toBeInTheDocument();
    // Herz-Icon
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
    // ColorPalette
    expect(screen.getByTestId("color-palette")).toBeInTheDocument();
    // Überschrift und Details
    expect(
      screen.getByRole("heading", { name: /Test Art/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Artist: Test Artist")).toBeInTheDocument();
    expect(screen.getByText("Genre: Test Genre")).toBeInTheDocument();
    expect(screen.getByText("Published: 2020")).toBeInTheDocument();
    // Back-Button
    expect(
      screen.getByRole("button", { name: /navigate back/i })
    ).toBeInTheDocument();
  });

  it("calls onBack when back button is clicked", () => {
    const onBack = jest.fn();
    render(<ArtPieceDetails piece={piece} onBack={onBack} />);
    fireEvent.click(screen.getByRole("button", { name: /navigate back/i }));
    expect(onBack).toHaveBeenCalled();
  });

  it("calls toggleFavourite when heart icon is clicked", () => {
    render(<ArtPieceDetails piece={piece} onBack={() => {}} />);
    fireEvent.click(screen.getByLabelText(/favourite/i)); // wenn aria-label
    // fireEvent.click(screen.getByTestId("heart-icon")); // wenn data-testid
    expect(mockToggleFavourite).toHaveBeenCalled();
  });
});
