
export default function CommentList({ comments})    {
  if (!comments || comments.length === 0) {
    return <p>No comments available yet.</p>;
  }

  return (
<ul>
    {comments.map((comment, index) => (
      <li key={index}>
        <p>{comment.comment}</p>
        <p><small>{comment.date}</small></p>
      </li>
    ))}
</ul>)}