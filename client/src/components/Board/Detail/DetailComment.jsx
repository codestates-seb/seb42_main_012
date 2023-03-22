import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentList from '../Comment/CommentList';
import CommentPost from '../Comment/CommentPost';
import useStore from '../../../state/useStore';

function BoardDetailComment() {
  const { comments, setComments } = useStore();
  const { id } = useParams();

  const commentDetailId = comments.filter(
    comment => comment.boardId === Number(id),
  );

  useEffect(() => {
    axios.get('/communities/comments').then(res => {
      setComments(res.data.data);
    });
  }, []);

  return (
    <>
      <CommentPost />

      {commentDetailId.map(comment => (
        <div key={comment.commentId}>
          <CommentList comment={comment} />
        </div>
      ))}
    </>
  );
}

export default BoardDetailComment;
