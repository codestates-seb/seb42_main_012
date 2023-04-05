import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiFillEye, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import dateFormat from '../../utils/dateFormat';
import api from '../../utils/api';
import useBoardStore from '../../state/useBoardStore';

function BoardContentList({
  to,
  classname,
  tabId,
  title,
  createdAt,
  viewcnt,
  communityId,
  bookmarked,
}) {
  const [heartOn, setHeartOn] = useState(bookmarked !== null);
  const { setBoards } = useBoardStore();

  const buttonHandler = async () => {
    await api.post(`/communities/bookmarks/${communityId}`);
    setHeartOn(!heartOn);

    api
      .get('/communities?lastFeedId')
      .then(res => setBoards(res.data.contents));
  };

  return (
    <div className="flex items-center border-b border-[var(--second-border)] border-opacity-10 active:bg-[var(--main-active)] active:bg-opacity-10 cursor-pointer">
      <Link to={to} className="h-24 mb-2 w-80">
        <li className={`flex justify-between items-center pt-4 ${classname}`}>
          <div className="flex flex-col">
            <p>{title}</p>
            <span className="text-[var(--main)] mt-2">{tabId}</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="flex items-center justify-end text-sm">
                <AiFillEye className="mr-1" />
                {viewcnt}
              </span>
              <span className="text-[var(--second)] text-sm">
                {dateFormat(createdAt)}
              </span>
            </div>
          </div>
        </li>
      </Link>
      <div className="ml-2 text-xl ">
        <button type="button" onClick={buttonHandler}>
          {!heartOn ? (
            <AiOutlineHeart />
          ) : (
            <AiFillHeart className="text-orange" />
          )}
        </button>
      </div>
    </div>
  );
}

export default BoardContentList;
