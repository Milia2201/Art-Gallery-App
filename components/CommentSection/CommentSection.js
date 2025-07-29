import CommentForm from "./CommentForm.js";
import useLocalStorage from "use-local-storage";
export default function CommentSection({piece}) {
    const [comments, setComments] = useLocalStorage(piece.slug, []);

    const handleNewComment = (newComment) => {
        setComments([...comments, newComment]);
    };

  return (
    <div>
      <h2>Comments</h2>
        <CommentForm handleNewComment={handleNewComment}/>
      <p>No comments available yet.</p>
    </div>
  );
}