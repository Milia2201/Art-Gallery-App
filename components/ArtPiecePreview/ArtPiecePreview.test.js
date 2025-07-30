import { render, screen, fireEvent } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

const piece = {
  slug: "test-art",
  imageSource: "/test.jpg",
  name: "Test Art",
};

jest.mock("use-local-storage", () => () => [[], jest.fn()]);
jest.mock("next/link", () => {
  const MockLink = ({ children }) => <>{children}</>;
  MockLink.displayName = "MockLink";
  return MockLink;
});
const mockToggleFavourite = jest.fn();
jest.mock("../../scripts/fetcher/toggleFavourites/toggleFavourites", () => ({
  __esModule: true,
  default: (...args) => mockToggleFavourite(...args),
}));

describe("ArtPiecePreview", () => {
  it("renders image and name", () => {
    render(<ArtPiecePreview piece={piece} />);
    expect(screen.getByAltText("Test Art")).toBeInTheDocument();
  });

  it("renders heart icon", () => {
    render(<ArtPiecePreview piece={piece} />);
    // Suche nach dem SVG-Element mit aria-label oder data-testid
    expect(screen.getByLabelText(/favourite/i)).toBeInTheDocument();
  });

  it("calls toggleFavourite on heart icon click", () => {
    render(<ArtPiecePreview piece={piece} />);
    // Suche nach dem Icon, z.B. mit aria-label
    fireEvent.click(screen.getByLabelText(/favourite/i));
    expect(mockToggleFavourite).toHaveBeenCalled();
  });
});
