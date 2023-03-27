import { Link } from 'react-router-dom';

import useMyStore from '../../../state/useMyStore';

function MyPageButton({ to, text }) {
  const {
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useMyStore();

  return (
    <li className="z-10 flex-auto w-1/3">
      <Link
        to={to}
        className="flex flex-col items-center justify-center w-full p-8"
      >
        {to === '/my/board' ? (
          <span className="text-2xl font-bold">{`${myBoards.totalCnt}`}</span>
        ) : to === '/my/comments' ? (
          <span className="text-2xl font-bold">{`${myComments.totalCnt}`}</span>
        ) : to === '/my/reviews' ? (
          <span className="text-2xl font-bold">{`${myReviews.totalCnt}`}</span>
        ) : to === '/my/bookmarks/gyms' ? (
          <span className="text-2xl font-bold">{`${myGymsBookmarks.totalCnt}`}</span>
        ) : to === '/my/bookmarks/board' ? (
          <span className="text-2xl font-bold">
            {`${myBoardsBookmarks.totalCnt}`}
          </span>
        ) : to === null || to === undefined ? (
          '0'
        ) : null}
        <span className="w-20 text-xs text-center">{text}</span>
      </Link>
    </li>
  );
}

export default MyPageButton;
