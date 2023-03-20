import CommentList from '../Comment/CommentList';
import CommentPost from '../Comment/CommentPost';

function BoardDetailComment({ comments, members }) {
  return (
    <>
      <CommentPost />
      <CommentList comments={comments} members={members} />
    </>
  );
}

export default BoardDetailComment;
