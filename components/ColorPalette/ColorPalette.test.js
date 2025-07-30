import { render, screen } from "@testing-library/react";
import ColorPalette from "./ColorPalette";

describe("ColorPalette", () => {
  it("renders 'No colors available.' if colors is empty", () => {
    render(<ColorPalette colors={[]} />);
    expect(screen.getByText(/no colors available/i)).toBeInTheDocument();
  });

  it("renders a list item for each color", () => {
    const colors = ["#ff0000", "#00ff00", "#0000ff"];
    render(<ColorPalette colors={colors} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(colors.length);
    // Optional: Teste, ob die Hintergrundfarbe stimmt
    colors.forEach((color, idx) => {
      expect(items[idx]).toHaveStyle(`background-color: ${color}`);
    });
  });
});