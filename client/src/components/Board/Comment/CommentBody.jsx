import { useState } from 'react';

import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

import dataFormat from '../../../utils/dateFormat';
import api from '../../../utils/api';

function CommentBody({ comment, createdAt }) {
  const [edit, setEdit] = useState(false);
  const [commentEdit, setCommentEidt] = useState(comment.comment);

  // console.log(comment);

  const handleText = e => {
    setCommentEidt(e.target.value);
  };

  const handleEdit = () => {
    api
      .patch(`communities/comments/${comment.commentId}`, {
        comment: commentEdit,
      })
      .then(window.location.reload())
      .catch(err => console.log(err));
  };

  return (
    <li className="flex ml-10">
      <div className="">
        {edit === false ? (
          <>
            <p className="ml-4">{comment}</p>
            <button
              type="button"
              className="absolute flex items-center right-10 bottom-[45%]"
            >
              <FaPencilAlt
                className="text-[var(--second)]  mt-1"
                onClick={() => setEdit(!edit)}
              />
            </button>
          </>
        ) : (
          <>
            <textarea
              type="text"
              className="w-[80%] ml-4"
              value={commentEdit}
              onChange={handleText}
            />
            <div className="absolute flex items-center right-10 bottom-[45%]">
              <button type="submit" onClick={handleEdit}>
                <FiCheck className="text-[var(--second)]  mt-1" />
              </button>
            </div>
          </>
        )}
        <button type="button">
          <BsTrash3Fill className="text-[var(--second)] absolute right-5 bottom-[45%]" />
        </button>
      </div>
      <span className="ml-4 text-sm text-[#d9d9d9]">
        {dataFormat(createdAt)}
      </span>
    </li>
  );
}

export default CommentBody;
