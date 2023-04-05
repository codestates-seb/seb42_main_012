import { useEffect } from 'react';
import api from '../../utils/api';
import BoardContentList from './BoardContentList';
import useBoardStore from '../../state/useBoardStore';
// import BoardCard from './BoardCard';

function Board() {
  const { boards, setBoards } = useBoardStore();

  useEffect(() => {
    api
      .get('/communities?lastFeedId')
      .then(res => setBoards(res.data.contents));
  }, []);

  return (
    <ul>
      {boards.map(board => (
        <BoardContentList
          key={board.communityId}
          communityId={board.communityId}
          to={`${board.communityId}`}
          classname="cursor-pointer"
          tabId={
            board.tabId === 1
              ? '자유게시판'
              : board.tabId === 2
              ? '꿀팁'
              : board.tabId === 3
              ? '오운완인증'
              : board.tabId === 4
              ? '자세피드백'
              : board.tabId === 5
              ? '파트너모집'
              : null
          }
          title={board.title}
          viewcnt={board.viewCnt}
          bookmarked={board.isBookmarked}
          createdAt={board.createdAt}
        />
      ))}
    </ul>
  );
}

export default Board;
