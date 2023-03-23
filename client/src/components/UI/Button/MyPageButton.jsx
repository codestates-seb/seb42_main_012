import { Link } from 'react-router-dom';
import useStore from '../../../state/useStore';

function MyPageButton({ to, text }) {
  const {
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useStore();

  return (
    <li className="z-10 flex-auto w-1/3">
      <Link
        to={to}
        className="flex flex-col items-center justify-center w-full p-8"
      >
        {to === '/my/board' ? (
          <span className="text-2xl font-bold">{myBoards.totalCnt}</span>
        ) : to === '/my/comments' ? (
          <span className="text-2xl font-bold">{myComments.totalCnt}</span>
        ) : to === '/my/reviews' ? (
          <span className="text-2xl font-bold">{myReviews.totalCnt}</span>
        ) : to === '/my/bookmarks/gyms' ? (
          <span className="text-2xl font-bold">{myGymsBookmarks.totalCnt}</span>
        ) : to === '/my/bookmarks/board' ? (
          <span className="text-2xl font-bold">
            {myBoardsBookmarks.totalCnt}
          </span>
        ) : (
          '0'
        )}
        <span className="w-20 text-xs text-center">{text}</span>
      </Link>
    </li>
  );
}

export default MyPageButton;
