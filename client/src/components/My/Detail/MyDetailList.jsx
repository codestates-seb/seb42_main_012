import { useLocation, Link } from 'react-router-dom';
import useMyStore from '../../../state/useMyStore';
import MyDetailListItem from './MyDetailListItem';

function MyDetailList() {
  const location = useLocation();

  const {
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useMyStore();

  return (
    <ul>
      {location.pathname === '/my/board' ? (
        myBoards.contents.map((board, index) => (
          <Link key={index} to={`/board/${board.boardId}`}>
            <MyDetailListItem
              tabName={board.boardTab}
              title={board.boardTitle}
              created={board.boardCreatedAt}
            />
          </Link>
        ))
      ) : location.pathname === '/my/comments' ? (
        myComments.contents.map((comment, index) => (
          <Link key={index} to={`/board/${comment.boardId}`}>
            <MyDetailListItem
              tabName={comment.boardTab}
              title={comment.boardCommentContent}
              created={comment.boardCommentCreatedAt}
            />
          </Link>
        ))
      ) : location.pathname === '/my/reviews' ? (
        myReviews.contents.map((review, index) => (
          <Link key={index} to={`/gyms/${review.gymId}`}>
            <MyDetailListItem
              grades={review.gymGrade}
              title={review.gymReviewContent}
              created={review.gymReviewCreatedAt}
            />
          </Link>
        ))
      ) : location.pathname === '/my/bookmarks/gyms' ? (
        myGymsBookmarks.contents.map((gymBookmark, index) => (
          <Link key={index} to={`/gyms/${gymBookmark.gymId}`}>
            <MyDetailListItem
              image={gymBookmark.gymImage}
              title={gymBookmark.gymName}
              gymId={gymBookmark.gymId}
            />
          </Link>
        ))
      ) : location.pathname === '/my/bookmarks/board' ? (
        myBoardsBookmarks.contents.map((boardBookmark, index) => (
          <Link key={index} to={`/board/${boardBookmark.boardId}`}>
            <MyDetailListItem
              tabName={boardBookmark.boardTab}
              title={boardBookmark.boardTitle}
              created={boardBookmark.boardCreatedAt}
            />
          </Link>
        ))
      ) : (
        <div className="px-4 py-8 text-center">내용이 없습니다.</div>
      )}
    </ul>
  );
}

export default MyDetailList;
