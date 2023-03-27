import { useLocation } from 'react-router-dom';
import useMyStore from '../../../state/useMyStore';

function MyDetailTitle() {
  const {
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useMyStore();
  const location = useLocation();
  const path = location.pathname;
  const pathArr = [
    '/my/board',
    '/my/comments',
    '/my/reviews',
    '/my/bookmarks/gyms',
    '/my/bookmarks/board',
  ];

  return (
    <div className="flex items-center justify-between px-4 mb-8 font-bold">
      {path === pathArr[0] ? (
        <>
          <h2>내가 쓴 글</h2>
          <span className="text-[var(--main)]">{`(${myBoards.contents.length})`}</span>
        </>
      ) : path === pathArr[1] ? (
        <>
          <h2>내가 쓴 댓글</h2>
          <span className="text-[var(--main)]">{`(${myComments.contents.length})`}</span>
        </>
      ) : path === pathArr[2] ? (
        <>
          <h2>내가 쓴 리뷰</h2>
          <span className="text-[var(--main)]">{`(${myReviews.contents.length})`}</span>
        </>
      ) : path === pathArr[3] ? (
        <>
          <h2>헬스장 찜 목록</h2>
          <span className="text-[var(--main)]">{`(${myGymsBookmarks.contents.length})`}</span>
        </>
      ) : path === pathArr[4] ? (
        <>
          <h2>게시글 찜 목록</h2>
          <span className="text-[var(--main)]">
            {`(${myBoardsBookmarks.contents.length})`}
          </span>
        </>
      ) : null}
    </div>
  );
}

export default MyDetailTitle;
