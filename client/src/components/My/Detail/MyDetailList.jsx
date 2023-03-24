import { useLocation } from 'react-router-dom';
import useStore from '../../../state/useStore';
import MyDetailListItem from './MyDetailListItem';

function MyDetailList() {
  const location = useLocation();

  const {
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useStore();

  return (
    <ul>
      {location.pathname === '/my/board' ? (
        myBoards.contents.map(board => (
          <MyDetailListItem
            key={board.boardId}
            tabName={board.boardTab}
            title={board.boardTitle}
            created={board.boardCreatedAt}
          />
        ))
      ) : location.pathname === '/my/comments' ? (
        myComments.contents.map(comment => (
          <MyDetailListItem
            key={comment.boardId}
            tabName={comment.boardTab}
            title={comment.boardCommentContent}
            created={comment.boardCommentCreatedAt}
          />
        ))
      ) : location.pathname === '/my/reviews' ? (
        myReviews.contents.map(review => (
          <MyDetailListItem
            key={review.gymId}
            grades={review.gymGrade}
            title={review.gymReviewContent}
            created={review.gymReviewCreatedAt}
          />
        ))
      ) : location.pathname === '/my/bookmarks/gyms' ? (
        myGymsBookmarks.contents.map(gymBookmark => (
          <MyDetailListItem
            key={gymBookmark.gymId}
            image={gymBookmark.gymImage}
            title={gymBookmark.gymName}
          />
        ))
      ) : location.pathname === '/my/bookmarks/board' ? (
        myBoardsBookmarks.contents.map(boardBookmark => (
          <MyDetailListItem
            key={boardBookmark.boardId}
            tabName={boardBookmark.boardTab}
            title={boardBookmark.boardTitle}
            created={boardBookmark.boardCreatedAt}
          />
        ))
      ) : (
        <div className="px-4 py-8 text-center">내용이 없습니다.</div>
      )}
    </ul>
  );
}

export default MyDetailList;
