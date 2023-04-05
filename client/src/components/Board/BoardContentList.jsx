import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import dateFormat from '../../utils/dateFormat';
// import HeartButton from '../UI/Button/HeartButton'

function BoardContentList({ to, classname, tabId, title, createdAt, viewcnt }) {
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
            {/* <div className="ml-2 text-xl">
              <HeartButton bookmarked={bookmarked} />
            </div> */}
          </div>
        </li>
      </Link>
    </>
  );
}

export default BoardContentList;
