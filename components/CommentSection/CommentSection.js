import CommentForm from "./CommentForm.js";
import useLocalStorage from "use-local-storage";
import CommentList from "./CommentList.js";
export default function CommentSection({piece}) {
    const [comments, setComments] = useLocalStorage(piece.slug, []);

    const handleNewComment = (newComment) => {
        setComments([...comments, newComment]);
    };

  return (
    <div>
      <h2>Comments</h2>
        <CommentList comments={comments} />
        <CommentForm handleNewComment={handleNewComment}/>
    </div>
  );
}