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

describe("ArtPieceDetails", () => {
  it("renders all details", () => {
    render(<ArtPieceDetails piece={piece} onBack={() => {}} />);
    expect(screen.getByRole("heading", { name: /Test Art/i })).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByText("Test Genre")).toBeInTheDocument();
    expect(screen.getByTestId("color-palette")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /navigate back/i })).toBeInTheDocument();
  });

  it("calls onBack when back button is clicked", () => {
    const onBack = jest.fn();
    render(<ArtPieceDetails piece={piece} onBack={onBack} />);
    fireEvent.click(screen.getByRole("button", { name: /navigate back/i }));
    expect(onBack).toHaveBeenCalled();
  });
});