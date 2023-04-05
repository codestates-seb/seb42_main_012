import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';

import dateFormat from '../../../utils/dateFormat';
import api from '../../../utils/api';
import useMyStore from '../../../state/useMyStore';
import useBoardStore from '../../../state/useBoardStore';

function CommentBody({
  displayName,
  createdAt,
  commented,
  commentId,
  memberId,
}) {
  const { myElements } = useMyStore();
  const { setComments } = useBoardStore();
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [commentContent, setCommentContent] = useState(commented);

  const handleContent = e => {
    setCommentContent(e.target.value);
  };

  const handleEdit = () => {
    setEdit(!edit);
    setCommentContent(commented);
  };

  const handleDelete = async () => {
    await api.delete(`/communities/comments/${commentId}`);
    api
      .get(`/communities/comments/${id}?lastFeedId=`)
      .then(res => setComments(res.data.contents));
  };

  const handleUpdate = async () => {
    await api
      .patch(`/communities/comments/${commentId}`, {
        comment: commentContent,
      })
      .then(setEdit(!edit));

    api
      .get(`/communities/comments/${id}?lastFeedId=`)
      .then(res => setComments(res.data.contents));
  };

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
          {edit ? null : <p className="w-56 text-sm">{commented}</p>}
        </div>
        {memberId === myElements.memberId ? (
          <div className="flex text-[#d9d9d9] text-md">
            {edit ? (
              <div>
                <button
                  type="button"
                  className="mr-2 text-sm"
                  onClick={handleUpdate}
                >
                  수정완료
                </button>
                <button
                  type="button"
                  className="mr-2 text-sm"
                  onClick={handleEdit}
                >
                  수정취소
                </button>
              </div>
            ) : (
              <div>
                <button type="button" className="mr-2" onClick={handleEdit}>
                  <FaPencilAlt />
                </button>
                <button type="button" onClick={handleDelete}>
                  <BsTrash3Fill />
                </button>
              </div>
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
