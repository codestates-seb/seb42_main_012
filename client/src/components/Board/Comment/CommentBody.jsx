import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

import api from '../../../utils/api';
import boardStore from '../../../state/boardStore';

function CommentBody({ comment }) {
  const { comments } = boardStore();
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [useComment, setUseComment] = useState(comments.useComment);

  const editHandler = () => {
    setEdit(!edit);
  };

  const onChangeHandler = e => {
    setUseComment(e.target.value);
  };

  const updateHandler = async () => {
    const body = new FormData();
    const blob = new Blob([JSON.stringify(useComment)], {
      type: 'application/json',
    });

    body.append('request', blob);

    // console.log(body);

    try {
      await api
        .patch(`/communities/comments/${id}`, body, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          console.log(res.status);
        });
    } catch (err) {
      alert('요청에 실패했어요😭');
      console.log(err);
    }
  };

  return (
    <li className="ml-10">
      <div className="flex ">
        {edit ? (
          <input
            type="text"
            className="ml-4"
            value={useComment}
            onChange={onChangeHandler}
          />
        ) : (
          <>
            <p className="ml-4">
              {comments.comment}
              {comment}
            </p>
          </>
        )}

        <button type="button">
          {edit ? (
            <BsTrash3Fill
              className="text-[var(--second)] ml-8 mr-2 mt-1"
              onClick={updateHandler}
            />
          ) : (
            <FiCheck
              className="text-[var(--second)] ml-8 mr-2 mt-1"
              onClick={editHandler}
            />
          )}
          <FaPencilAlt className="text-[var(--second)] mt-1" />
        </button>
      </div>
      <span className="ml-4 text-sm text-[#d9d9d9]">34초전</span>
    </li>
  );
}

export default CommentBody;
