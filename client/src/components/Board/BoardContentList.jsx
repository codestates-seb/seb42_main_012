import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiFillEye, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import dateFormat from '../../utils/dateFormat';

function BoardContentList({
  to,
  classname,
  tabId,
  title,
  createdAt,
  viewcnt,
  bookmarked,
}) {
  const [heartOn, setHeartOn] = useState(bookmarked);

  const buttonHandler = () => {
    if (bookmarked === null) {
      setHeartOn(!heartOn);
    }
    setHeartOn(!heartOn);
  };

  return (
    <>
      <Link to={to}>
        <li
          className={`flex justify-between items-center px-4 py-8 border-b border-[var(--second-border)] border-opacity-10 active:bg-[var(--main-active)] active:bg-opacity-10 cursor-pointer ${classname}`}
        >
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
      <div className="right-0 ml-2 text-xl ">
        <button type="button" onClick={buttonHandler}>
          {heartOn && bookmarked ? (
            <AiFillHeart className="text-orange" />
          ) : (
            <AiOutlineHeart />
          )}
          {console.log(bookmarked, heartOn)}
        </button>
      </div>
    </>
  );
}

export default BoardContentList;
