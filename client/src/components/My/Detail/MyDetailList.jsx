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

  // {location.pathname === '/my/board' ? (
  //   myBoards.contents.map(board => (
  //     <MyDetailListItem
  //       key={board.boardId}
  //       tabName={board.boardTab}
  //       title={board.boardTitle}
  //       created={board.boardCreatedAt}
  //     />
  //   ))
  // ) : location.pathname === '/my/comment' ? (
  //   myComments.contents.map(comment => (
  //     <MyDetailListItem
  //       key={comment.boardId}
  //       tabName={comment.boardTab}
  //       title={comment.boardCommentContent}
  //       created={comment.boardCommentCreatedAt}
  //     />
  //   ))
  // ) : location.pathname === '/my/reviews' ? (
  //   myReviews.contents.map(review => (
  //     <MyDetailListItem
  //       key={review.boardId}
  //       tabName={review.boardTab}
  //       title={review.boardCommentContent}
  //       created={review.boardCommentCreatedAt}
  //     />
  //   ))
  // ) : location.pathname === '/my/bookmarks/gyms' ? (
  //   myGymsBookmarks.contents.map(gymBookmark => (
  //     <MyDetailListItem
  //       key={gymBookmark.boardId}
  //       tabName={gymBookmark.boardTab}
  //       title={gymBookmark.boardCommentContent}
  //       created={gymBookmark.boardCommentCreatedAt}
  //     />
  //   ))
  // ) : location.pathname === '/my/bookmarks/board' ? (
  //   myBoardsBookmarks.contents.map(boardBookmark => (
  //     <MyDetailListItem
  //       key={boardBookmark.boardId}
  //       tabName={boardBookmark.boardTab}
  //       title={boardBookmark.boardCommentContent}
  //       created={boardBookmark.boardCommentCreatedAt}
  //     />
  //   ))
  // ) : (
  //   <div className="px-4 py-8 text-center">내용이 없습니다.</div>
  // )}

  return (
    <ul>
      {location.pathname === '/my/board' ? myBoards.contents.map(board => (
      <MyDetailListItem
        key={board.boardId}
        tabName={board.boardTab}
        title={board.boardTitle}
        created={board.boardCreatedAt}
      />))}
    
    
      {console.log(myComments.contents)}
    </ul>
  );
}

export default MyDetailList;
