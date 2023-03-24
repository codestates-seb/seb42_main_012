import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useStore from '../../../state/useStore';
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
  } = useStore();

  useEffect(() => {
    api
      .get('/members/my/communities?lastFeedId=56')
      .then(res => setMyBoards(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/comments?lastFeedId=15')
      .then(res => setMyComments(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/reviews?lastFeedId=15')
      .then(res => setMyReviews(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/bookmarks/gyms?lastFeedId=15')
      .then(res => setMyGymsBookmarks(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/bookmarks/communities?lastFeedId=15')
      .then(res => setBoardsBookmarks(res.data.data));
  }, []);

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
        ) : to === null || to === undefined ? (
          '0'
        ) : null}
        <span className="w-20 text-xs text-center">{text}</span>
      </Link>
    </li>
  );
}

export default MyPageButton;
