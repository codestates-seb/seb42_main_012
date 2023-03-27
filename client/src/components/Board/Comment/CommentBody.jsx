import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

import api from '../../../utils/api';
// import boardStore from '../../../state/boardStore';

function CommentBody({ comment }) {
  // const { comments } = boardStore();
  const { id } = useParams();

  const [edit, setEdit] = useState(false);
  const [commentEdit, setCommentEidt] = useState();

  const onChangeHandler = e => {
    setCommentEidt(e.target.value);
  };

  const editHandler = () => {
    setEdit(!edit);
  };

  const updateHandler = async () => {
    const body = new FormData();
    const blob = new Blob([JSON.stringify(commentEdit)], {
      type: 'application/json',
    });

    body.append('request', blob);

    // console.log(body);

    try {
      await api
        .patch(`communities/comments/${id}`, body, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          if (res.status === 200) {
            window.location.reload();
            editHandler();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="ml-10">
      <div className="flex ">
        {edit ? (
          <>
            <input
              type="text"
              className="w-[80%] ml-4"
              value={commentEdit}
              onChange={onChangeHandler}
            />
            <button
              type="button"
              className="absolute flex items-center right-4 bottom-100"
            >
              <FiCheck
                className="text-[var(--second)]  mt-1"
                onClick={updateHandler}
              />
              <BsTrash3Fill className="text-[var(--second)] ml-1" />
            </button>
          </>
        ) : (
          <>
            <p className="ml-4">{comment}</p>
            <button
              type="button"
              className="absolute flex items-center right-4 bottom-100"
            >
              <FaPencilAlt
                className="text-[var(--second)]  mt-1"
                onClick={editHandler}
              />
              <BsTrash3Fill className="text-[var(--second)] ml-1" />
            </button>
          </>
        )}
      </div>
      <span className="ml-4 text-sm text-[#d9d9d9]">34초전</span>
    </li>
  );
}

export default CommentBody;
