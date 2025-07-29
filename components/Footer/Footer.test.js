import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders the navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /Spotlight/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /Art Pieces/i })).toHaveAttribute("href", "/details");
    expect(screen.getByRole("link", { name: /Favourites/i })).toHaveAttribute("href", "/favourites");
  });

  it("renders a nav element", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});