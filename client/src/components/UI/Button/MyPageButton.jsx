import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMyStore from '../../../state/useMyStore';
import api from '../../../utils/api';

function MyPageButton({ to, text }) {
  const {
    setMyBoards,
    setMyComments,
    setMyReviews,
    setMyGymsBookmarks,
    setBoardsBookmarks,
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useMyStore();

  useEffect(() => {
    const apiData = async () => {
      try {
        const [data1, data2, data3, data4, data5] = await Promise.all([
          api.get('/members/my/communities?lastFeedId='),
          api.get('/members/my/comments?lastFeedId='),
          api.get('/members/my/reviews?lastFeedId='),
          api.get('/members/my/bookmarks/gyms?lastFeedId='),
          api.get('/members/my/bookmarks/communities?lastFeedId='),
        ]);
        setMyBoards(data1.data.data);
        setMyComments(data2.data.data);
        setMyReviews(data3.data.data);
        setMyGymsBookmarks(data4.data.data);
        setBoardsBookmarks(data5.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiData();
  }, []);

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
