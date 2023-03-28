import { useLocation } from 'react-router-dom';
import ReviewScore from '../../Gym/Review/ReviewScore';
import dateFormat from '../../../utils/dateFormat';

function MyDetailListItem({ tabName, title, created, grade, image }) {
  const location = useLocation();
  const classes =
    'border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)] text-xs';

  return (
    <li className="flex items-center justify-between w-full px-4 py-8 border-y border-[var(--main-border)] active:bg-[var(--main-active)] cursor-pointer">
      <div className="flex items-center justify-center">
        {location.pathname === '/my/board' ? (
          <div className={classes}>{tabName}</div>
        ) : location.pathname === '/my/comments' ? (
          <div className={classes}>{tabName}</div>
        ) : location.pathname === '/my/reviews' ? (
          <ReviewScore grades={grade} />
        ) : location.pathname === '/my/bookmarks/gyms' ? (
          <img className="w-40" src={image} alt="헬스장이미지" />
        ) : location.pathname === '/my/bookmarks/board' ? (
          <div className={classes}>{tabName}</div>
        ) : null}
        <h3 className="mx-2 line-clamp-1">{title}</h3>
      </div>
      {location.pathname !== '/my/bookmarks/gyms' ? (
        <span className="justify-self-end text-[var(--second)]">
          {dateFormat(created)}
        </span>
      ) : null}
    </li>
  );
}

export default MyDetailListItem;
