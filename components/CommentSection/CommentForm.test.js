import { render, screen, fireEvent } from "@testing-library/react";
import CommentForm from "./CommentForm";

describe("CommentForm", () => {
  it("renders textarea and button", () => {
    render(<CommentForm handleNewComment={jest.fn()} />);
    expect(
      screen.getByPlaceholderText(/write your comment/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("calls handleNewComment with comment and date on submit", () => {
    const handleNewComment = jest.fn();
    render(<CommentForm handleNewComment={handleNewComment} />);
    fireEvent.change(screen.getByPlaceholderText(/write your comment/i), {
      target: { value: "Hello World!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    expect(handleNewComment).toHaveBeenCalledWith(
      expect.objectContaining({ comment: "Hello World!" })
    );
  });
});
