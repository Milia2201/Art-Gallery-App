export default function CommentForm({ handleNewComment }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries(formData));
    handleNewComment({comment: data.comment, date: getFormattedDateTime()});
    event.target.reset(); 
  };

  function getFormattedDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave a Comment</h2>
      <textarea
        placeholder="Write your comment here..."
        rows="4"
        cols="40"
        name="comment"
      ></textarea>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
