import MyPageButton from '../UI/Button/MyPageButton';

function MyPageList() {
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
