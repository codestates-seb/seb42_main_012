import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentHeader from './CommentHeader';
import CommentBody from './CommentBody';
import useBoardStore from '../../../state/useBoardStore';
import api from '../../../utils/api';

function CommentList() {
  const { id } = useParams();
  const { comments, setComments } = useBoardStore();

  useEffect(() => {
    api
      .get(`/communities/comments/${id}?lastFeedId=`)
      .then(res => setComments(res.data.contents));
  }, []);
  return (
    <ul className="mt-5">
      {comments.map((commented, idx) => (
        <li
          key={idx}
          className="flex items-center w-full border-b border-[#d9d9d9] py-3"
        >
          <CommentHeader
            memberId={commented.memberId}
            profileImage={commented.profileImage}
          />
          <CommentBody
            memberId={commented.memberId}
            displayName={commented.displayName}
            createdAt={commented.createdAt}
            commented={commented.comment}
            commentId={commented.commentId}
          />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
