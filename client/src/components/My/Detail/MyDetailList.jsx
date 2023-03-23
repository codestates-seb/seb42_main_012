import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
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
    axios
      .all([
        axios.get('/my/board'),
        axios.get('/my/comments'),
        axios.get('/my/reviews'),
        axios.get('/my/bookmarks/gyms'),
        axios.get('/my/bookmarks/gyms'),
      ])
      .then(
        axios.spread((...res) => {
          setMyBoards(res[0].data.data.contents);
          setMyComments(res[1].data.data.contents);
          setMyReviews(res[2].data.data);
          setMyGymsBookmarks(res[3].data.data);
          setBoardsBookmarks(res[4].data.data);
          console.log(res);
        }),
      );
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
