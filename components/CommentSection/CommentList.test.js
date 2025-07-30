import { render, screen } from "@testing-library/react";
import CommentList from "./CommentList";

describe("CommentList", () => {
  it("renders 'No comments available yet.' if comments is empty", () => {
    render(<CommentList comments={[]} />);
    expect(screen.getByText(/no comments available yet/i)).toBeInTheDocument();
  });

  it("renders a list of comments", () => {
    const comments = [
      { comment: "Nice!", date: "01.01.2024 12:00" },
      { comment: "Great work!", date: "02.01.2024 13:00" },
    ];
    render(<CommentList comments={comments} />);
    expect(
      screen.getByText((content) => content.includes("Nice!"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("Great work!"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("01.01.2024 12:00"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("02.01.2024 13:00"))
    ).toBeInTheDocument();
  });
});
