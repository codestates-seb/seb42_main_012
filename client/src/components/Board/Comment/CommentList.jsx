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
      .get(`/communities/comments/${id}?lastFeedId=`)
      .then(res => setComments(res.data.contents));
  }, []);

  return (
    <ul className="mt-5">
      {comments.map(comment => (
        <div key={comment.communityId}>
          <CommentHeader
            displayName={comment.displayName}
            imageUrl={comment.imageUrl}
          />
          <CommentBody
            comment={comment.comment}
            createdAt={comment.createdAt}
          />
          <div className="w-full border-[0.3px] border-[#d9d9d9] mt-3 mb-3" />
        </div>
      ))}
    </ul>
  );
}

export default CommentList;
