import { useLocation } from 'react-router-dom';
import ReviewScore from '../../Gym/Review/ReviewScore';
import TabButton from '../../UI/Button/TabButton';
import useStore from '../../../state/useStore';

function MyDetailListItem({ title, created }) {
  const location = useLocation();
  const {
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useStore();

  return (
    <li className="flex items-center justify-between px-4 py-8 border-y border-[var(--main-border)] active:bg-[var(--main-active)]">
      <div className="flex items-center justify-center">
        {location.pathname === '/my/board'
          ? myBoards.contents.map(board => (
              <TabButton key={board.boardId} tabName={board.boardTab[0]} />
            ))
          : location.pathname === '/my/comments'
          ? myComments.contents.map(comment => (
              <TabButton key={comment.boardId} tabName={comment.boardTab} />
            ))
          : location.pathname === '/my/reviews'
          ? myReviews.contents.map(review => (
              <ReviewScore key={review.gymId} grades={review.gymGrade} />
            ))
          : location.pathname === '/my/bookmarks/gyms'
          ? myGymsBookmarks.contents.map(gymBookmark => (
              <img
                className="w-40"
                src={gymBookmark.gymImage[0]}
                alt="헬스장이미지"
                key={gymBookmark.gymId}
              />
            ))
          : location.pathname === '/my/bookmarks/board'
          ? myBoardsBookmarks.contents.map(boardBookmark => (
              <TabButton
                key={boardBookmark.boardId}
                tabName={boardBookmark.boardTab}
              />
            ))
          : null}
        <h3 className="ml-2 line-clamp-1">{title}</h3>
      </div>
      <span className="text-[var(--second)]">{created}</span>
    </li>
  );
}

export default MyDetailListItem;
