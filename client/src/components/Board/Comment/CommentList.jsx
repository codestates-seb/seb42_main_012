import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';

import CommentHeader from './CommentHeader';
import CommentBody from './CommentBody';

import boardStore from '../../../state/boardStore';

function CommentList() {
  const { comments, setComments } = boardStore();
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/communities/comments/${id}?lastFeedId=20`)
      .then(res => setComments(res.data.contents));
  }, []);
  console.log(comments);

  return (
    <ul className="mt-5">
      {comments.map(comment => (
        <div key={comment.communityId} id={comment.communityId}>
          <CommentHeader
            displayName={comment.displayName}
            imageUrl={comment.imageUrl}
          />
          <CommentBody comment={comment.comment} />
          <div className="w-full border-[0.3px] border-[#d9d9d9] mt-3" />
        </div>
      ))}
    </ul>
  );
}

export default CommentList;
