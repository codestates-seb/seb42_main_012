import MyPageButton from '../UI/Button/MyPageButton';

function MyPageList() {
  return (
    <>
      <ul className="w-full bg-[#FCA43B] bg-opacity-10 flex flex-wrap flex-auto justify-between mt-9 mb-10 border border-[#FCA43B] rounded-xl">
        <MyPageButton to="/my/board" text="내가 쓴 글" count="20" />
        <MyPageButton to="/my/comments" text="내가 쓴 댓글" count="40" />
        <MyPageButton to="/my/reviews" text="내가 쓴 리뷰" count="5" />
        <MyPageButton
          to="/my/bookmarks/board"
          text="헬스장 찜 목록"
          count="10"
        />
        <MyPageButton to="/my/bookmarks/gyms" text="게시글 찜 목록" count="0" />
      </ul>
    </>
  );
}

export default MyPageList;
