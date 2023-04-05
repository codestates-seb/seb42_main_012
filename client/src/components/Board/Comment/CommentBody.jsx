import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';

import dateFormat from '../../../utils/dateFormat';
import api from '../../../utils/api';
import useMyStore from '../../../state/useMyStore';

function CommentBody({ displayName, createdAt, commented, commentId }) {
  const { myElements } = useMyStore();
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [commentContent, setCommentContent] = useState(commented);

  const handleContent = e => {
    setCommentContent(e.target.value);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = async () => {
    api.delete(`comments/${commentId}`);
  };

  const handleUpdate = async () => {
    // e.preventDefault();
    await api
      .patch(`/communities/comments/${id}`, {
        comment: commentContent,
      })
      .then(res => {
        // alert('수정 성공!');
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err.response));

    api
      .get(`/communities/comments/${id}?lastFeedId=`)
      .then(res => {
        setCommentContent(
          res.data.contents.fliter(content => content.commentId === commentId),
        );
        alert('수정 성공!');
      })
      .catch(err => console.log(err.response));
  };

  console.log(commentContent);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-baseline justify-center">
          <div className="flex items-center justify-center">
            <span className="font-medium text-md">{displayName}</span>
            <span className="ml-4 text-sm text-[#d9d9d9]">
              {dateFormat(createdAt)}
            </span>
          </div>
          <p className="text-sm">{commented}</p>
        </div>
        {commentContent.memberId === myElements.memberId ? (
          <div className="flex text-[#d9d9d9] text-md">
            {edit ? (
              <button
                type="button"
                className="mr-2 text-sm"
                onClick={handleUpdate}
              >
                수정완료
              </button>
            ) : (
              <button type="button" className="mr-2" onClick={handleEdit}>
                <FaPencilAlt />
              </button>
            )}
            {edit ? (
              <button
                type="button"
                className="mr-2 text-sm"
                onClick={handleEdit}
              >
                수정취소
              </button>
            ) : (
              <button type="button" onClick={handleDelete}>
                <BsTrash3Fill />
              </button>
            )}
          </div>
        ) : null}
      </div>
      {edit ? (
        <input
          className="p-1 mt-2 text-sm border border-[var(--second-border)] outline-[var(--main)] rounded-md"
          value={commentContent}
          onChange={handleContent}
        />
      ) : null}
    </div>
  );
}

export default CommentBody;
