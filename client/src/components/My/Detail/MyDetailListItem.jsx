import { useLocation } from 'react-router-dom';
import ReviewScore from '../../Gym/Review/ReviewScore';

function MyDetailListItem({ tabName, title, created, grade, image }) {
  const location = useLocation();

  return (
    <li className="flex items-center justify-between w-full px-4 py-8 border-y border-[var(--main-border)] active:bg-[var(--main-active)] w-full cursor-pointer">
      {/* <button
        className="flex items-center justify-between w-full"
        type="button"
        onClick={buttonHandler}
      > */}
      <div className="flex items-center justify-center">
        {location.pathname === '/my/board' ? (
          <div className="border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]">
            {tabName}
          </div>
        ) : location.pathname === '/my/comments' ? (
          <div className="border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]">
            {tabName}
          </div>
        ) : location.pathname === '/my/reviews' ? (
          <ReviewScore grades={grade} />
        ) : location.pathname === '/my/bookmarks/gyms' ? (
          <img className="w-40" src={image} alt="헬스장이미지" />
        ) : location.pathname === '/my/bookmarks/board' ? (
          <div className="border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]">
            {tabName}
          </div>
        ) : null}
        <h3 className="ml-2 line-clamp-1">{title}</h3>
      </div>
      <span className="justify-self-end text-[var(--second)]">{created}</span>
      {/* </button> */}
    </li>
  );
}

export default MyDetailListItem;
