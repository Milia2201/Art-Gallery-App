import styled from "styled-components";

export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>No comments available yet.</p>;
  }

  return (
    <ul>
      {comments.map((comment, index) => (
        <StyledLi key={index}>
          <p>&quot;{comment.comment}&quot;</p>
          <p>
            <small>({comment.date})</small>
          </p>
        </StyledLi>
      ))}
    </ul>
  );
}

const StyledLi = styled.li`
  display: flex;
  gap: 10px;
  height: 30px;
`;
