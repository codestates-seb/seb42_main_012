import { useEffect } from 'react';
import useMyStore from '../../state/useMyStore';
import MyPageButton from '../UI/Button/MyPageButton';
import api from '../../utils/api';

function MyPageList() {
  const {
    setMyBoards,
    setMyComments,
    setMyReviews,
    setMyGymsBookmarks,
    setBoardsBookmarks,
  } = useMyStore();

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
      <ul className="w-full bg-[var(--main-active)] flex flex-wrap flex-auto justify-between mt-10 mb-10 border border-[var(--main)] rounded-xl">
        <MyPageButton to="/my/board" text="내가 쓴 글" />
        <MyPageButton to="/my/comments" text="내가 쓴 댓글" />
        <MyPageButton to="/my/reviews" text="내가 쓴 리뷰" />
        <MyPageButton to="/my/bookmarks/gyms" text="헬스장 찜 목록" />
        <MyPageButton to="/my/bookmarks/board" text="게시글 찜 목록" />
      </ul>
    </>
  );
}

export default MyPageList;
