import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import useMyStore from '../../../state/useMyStore';
import MyDetailListItem from './MyDetailListItem';
import api from '../../../utils/api';

function MyDetailList() {
  const location = useLocation();

  const {
    setMyBoards,
    setMyComments,
    setMyReviews,
    setMyGymsBookmarks,
    setBoardsBookmarks,
    myBoards,
    myComments,
    myReviews,
    myGymsBookmarks,
    myBoardsBookmarks,
  } = useMyStore();

  useEffect(() => {
    const apiData = async () => {
      try {
        const [data1, data2, data3, data4, data5] = await Promise.all([
          api.get('/members/my/communities?lastFeedId='),
          api.get('/members/my/comments?lastFeedId='),
          api.get('/members/my/reviews?lastFeedId='),
          api.get('/members/my/bookmarks/gyms?lastFeedId='),
          api.get('/members/my/bookmarks/communities?lastFeedId='),
        ]);
        setMyBoards(data1.data.data);
        setMyComments(data2.data.data);
        setMyReviews(data3.data.data);
        setMyGymsBookmarks(data4.data.data);
        setBoardsBookmarks(data5.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiData();
  }, []);

  return (
    <ul className="mb-36">
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
              gymId={review.gymId}
            />
          </Link>
        ))
      ) : location.pathname === '/my/bookmarks/gyms' ? (
        myGymsBookmarks.contents.map((gymBookmark, index) => (
          <Link key={index} to={`/gyms/${gymBookmark.gymId}`}>
            <MyDetailListItem
              image={`https://main-012-bucket.s3.ap-northeast-2.amazonaws.com/${gymBookmark.gymImage}`}
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
