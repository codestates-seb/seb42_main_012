import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import useStore from '../../../state/useStore';
import MyDetailListItem from './MyDetailListItem';

function MyDetailList() {
  const location = useLocation();

  const {
    setGyms,
    setReviews,
    setComments,
    setBoards,
    boards,
    comments,
    reviews,
    gyms,
  } = useStore();

  useEffect(() => {
    axios
      .all([
        axios.get('/gyms'),
        axios.get('/gyms/reviews'),
        axios.get('/communities/comments'),
        axios.get('/communities'),
      ])
      .then(
        axios.spread((...res) => {
          setGyms(res[0].data.data.contents);
          setReviews(res[1].data.data.contents);
          setComments(res[2].data.data);
          setBoards(res[3].data.data);
        }),
      );
  }, []);

  const boardLikesFilter = boards.filter(board => board.memberId === 2);
  const gymLikesFilter = gyms.filter(gym => gym.memberId === 1);
  const reviewsFilter = reviews.filter(review => review.memberId === 1);
  const commentsFilter = comments.filter(comment => comment.memberId === 1);
  const boardsFilter = boards.filter(board => board.memberId === 1);

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
        ? gymLikesFilter.map(gym => (
            <MyDetailListItem
              key={gym.id}
              gym={gym}
              title={gym.gymName}
              created={gym.createdAt}
              gymImage={gym.gymImage}
            />
          ))
        : location.pathname === '/my/bookmarks/board'
        ? boardLikesFilter.map(board => (
            <MyDetailListItem
              key={board.id}
              board={board}
              tabName={board.tabName}
              title={board.title}
              created={board.createdAt}
            />
          ))
        : null}
    </ul>
  );
}

export default MyDetailList;
