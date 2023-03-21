import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MyDetailTitle from '../../components/My/Detail/MyDetailTitle';
import MyDetailList from '../../components/My/Detail/MyDetailList';
import useStore from '../../state/useStore';

function MyDetailPage() {
  const location = useLocation();
  const path = location.pathname.slice(4, location.pathname.length);

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

  const countFilter =
    location.pathname === '/my/board'
      ? boards.filter(board => board.memberId === 2).length
      : location.pathname === '/my/comments'
      ? comments.filter(comment => comment.memberId === 1).length
      : location.pathname === '/my/reviews'
      ? reviews.filter(review => review.memberId === 1).length
      : location.pathname === '/my/bookmarks/gyms'
      ? gyms.filter(gym => gym.memberId === 1).length
      : location.pathname === '/my/bookmarks/board'
      ? boards.filter(board => board.memberId === 2).length
      : null;

  switch (path) {
    case 'board':
      return (
        <>
          <MyDetailTitle text="내가 쓴 글" countFilter={countFilter} />
          <MyDetailList />
        </>
      );
    case 'comments':
      return (
        <>
          <MyDetailTitle text="내가 쓴 댓글" countFilter={countFilter} />
          <MyDetailList />
        </>
      );
    case 'reviews':
      return (
        <>
          <MyDetailTitle text="내가 쓴 리뷰" countFilter={countFilter} />
          <MyDetailList />
        </>
      );
    case 'bookmarks/board':
      return (
        <>
          <MyDetailTitle text="게시글 찜 목록" countFilter={countFilter} />
          <MyDetailList />
        </>
      );
    case 'bookmarks/gyms':
      return (
        <>
          <MyDetailTitle text="헬스장 찜 목록" countFilter={countFilter} />
          <MyDetailList />
        </>
      );
    default:
      return (
        <>
          <MyDetailTitle text="" countFilter={countFilter} />
          <MyDetailList />
        </>
      );
  }
}

export default MyDetailPage;
