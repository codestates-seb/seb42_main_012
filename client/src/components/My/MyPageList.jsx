// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MyPageButton from '../UI/Button/MyPageButton';
import useStore from '../../state/useStore';
import api from '../../utils/api';

function MyPageList() {
  const { setMyComments, myComments } = useStore();
  // useEffect(() => {
  //   api
  //     .get('/members/my/communities?lastFeedId=56')
  //     .then(res => setMyBoards(res.data.data));
  // }, []);
  // console.log(myBoards);

  useEffect(() => {
    api
      .get('/members/my/comments?lastFeedId=15')
      .then(res => setMyComments(res.data.data));
  }, []);
  console.log(myComments);

  return (
    <>
      <ul className="w-full bg-[var(--main-active)] flex flex-wrap flex-auto justify-between mt-9 mb-10 border border-[var(--main)] rounded-xl">
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
