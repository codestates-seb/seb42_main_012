import { useLocation } from 'react-router-dom';
// import axios from 'axios';
import { useEffect } from 'react';
import api from '../../../utils/api';
import useStore from '../../../state/useStore';
import MyDetailListItem from './MyDetailListItem';

function MyDetailList() {
  const location = useLocation();

  const {
    setMyBoards,
    setMyComments,
    setMyReviews,
    setMyGymsBookmarks,
    setBoardsBookmarks,
    boards,
    comments,
    reviews,
    gyms,
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

  const boardsFilter = boards.filter(board => board.memberId === 1);
  const commentsFilter = comments.filter(comment => comment.memberId === 1);
  const reviewsFilter = reviews.filter(review => review.memberId === 1);
  const gymBookmarkFilter = gyms.filter(gym => gym.memberId === 1);
  const boardBookmarkFilter = boards.filter(board => board.memberId === 2);

  return (
    <ul>
      {location.pathname === '/my/board'
        ? boardsFilter.map(board => (
            <MyDetailListItem
              key={board.id}
              board={board}
              tabName={board.tabName}
              title={board.title}
              created={board.createdAt}
            />
          ))
        : location.pathname === '/my/comments'
        ? commentsFilter.map(comment => (
            <MyDetailListItem
              key={comment.id}
              comment={comment}
              title={comment.comment}
              created={comment.createdAt}
            />
          ))
        : location.pathname === '/my/reviews'
        ? reviewsFilter.map(review => (
            <MyDetailListItem
              key={review.id}
              review={review}
              grade={review.grade}
              title={review.comment}
              created={review.createdAt}
            />
          ))
        : location.pathname === '/my/bookmarks/gyms'
        ? gymBookmarkFilter.map(gym => (
            <MyDetailListItem
              key={gym.id}
              gym={gym}
              title={gym.gymName}
              created={gym.createdAt}
              gymImage={gym.gymImage}
            />
          ))
        : location.pathname === '/my/bookmarks/board'
        ? boardBookmarkFilter.map(board => (
            <MyDetailListItem
              key={board.id}
              board={board}
              tabName={board.tabName}
              title={board.title}
              created={board.createdAt}
            />
          ))
        : '내용이 없습니다'}
    </ul>
  );
}

export default MyDetailList;
