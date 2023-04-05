import { useLocation } from 'react-router-dom';
import ReviewScoreList from '../../Gym/Review/ReviewScoreList';
import dateFormat from '../../../utils/dateFormat';

function MyDetailListItem({ tabName, title, created, grades, gymId, image }) {
  const location = useLocation();
  const classes =
    'border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)] text-xs';

  return (
    <li className="flex items-center justify-between w-full p-4 border-y border-[var(--main-border)] active:bg-[var(--main-active)] cursor-pointer">
      <div className="flex items-center justify-center">
        {location.pathname === '/my/board' ? (
          <div className={classes}>{tabName}</div>
        ) : location.pathname === '/my/comments' ? (
          <div className={classes}>{tabName}</div>
        ) : location.pathname === '/my/reviews' ? (
          <ReviewScoreList gymId={gymId} grades={grades} />
        ) : location.pathname === '/my/bookmarks/gyms' ? (
          <div className="mr-2">
            <img
              className="object-cover w-48 h-32"
              src={image === undefined ? null : image}
              alt="헬스장이미지"
            />
          </div>
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
