import { render, screen, fireEvent } from "@testing-library/react";
import CommentSection from "./CommentSection";

jest.mock("use-local-storage", () => () => [[], jest.fn()]);

describe("CommentSection", () => {
  const piece = { slug: "test-slug" };

  it("renders heading and form", () => {
    render(<CommentSection piece={piece} />);
    expect(
      screen.getByRole("heading", { name: /comments/i })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/write your comment/i)
    ).toBeInTheDocument();
  });

  "adds a comment and displays it in the list",
    () => {
      render(<CommentSection piece={piece} />);
      fireEvent.change(screen.getByPlaceholderText(/write your comment/i), {
        target: { value: "Test-Kommentar" },
      });
      fireEvent.click(screen.getByRole("button", { name: /send/i }));
      // Da useLocalStorage gemockt ist, wird der Kommentar nicht wirklich gespeichert,
      // aber der Form-Submit ruft handleNewComment auf, was getestet werden kann.
      // Für echten Integrationstest müsste useLocalStorage nicht gemockt werden.
      expect(screen.getByText("Test-Kommentar")).toBeInTheDocument();
    };
});
