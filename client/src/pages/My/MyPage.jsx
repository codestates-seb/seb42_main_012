import { useEffect } from 'react';
import api from '../../utils/api';
import useStore from '../../state/useStore';
import MyPageList from '../../components/My/MyPageList';
import MyAccount from '../../components/My/MyAccount';
import Profile from '../../components/My/Profile';
// import validate from '../../utils/validate';

function MyPage() {
  const {
    // myBoards,
    setMyBoards,
    setMyComments,
    setMyReviews,
    setMyGymsBookmarks,
    setBoardsBookmarks,
  } = useStore();

  useEffect(() => {
    api
      .get('/members/my/communities?lastFeedId=')
      .then(res => setMyBoards(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/comments?lastFeedId=')
      .then(res => setMyComments(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/reviews?lastFeedId=')
      .then(res => setMyReviews(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/bookmarks/gyms?lastFeedId=')
      .then(res => setMyGymsBookmarks(res.data.data));
  }, []);

  useEffect(() => {
    api
      .get('/members/my/bookmarks/communities?lastFeedId=')
      .then(res => setBoardsBookmarks(res.data.data));
  }, []);

  return (
    <>
      <Profile />
      <MyPageList />
      <MyAccount />
    </>
  );
}

export default MyPage;
