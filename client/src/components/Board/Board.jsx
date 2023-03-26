import { useEffect } from 'react';
import api from '../../utils/api';
import BoardContentList from './BoardContentList';
import boardStore from '../../state/boardStore';
// import BoardCard from './BoardCard';

function Board() {
  const { boards, setBoards } = boardStore();

  useEffect(() => {
    api
      .get('/communities?lastFeedId=56')
      .then(res => setBoards(res.data.contents));
  }, []);
  // console.log(boards);
  return (
    <ul>
      {boards.map(board => (
        <BoardContentList
          key={board.communityId}
          id={board.communityId}
          to={`${board.communityId}`}
          classname="border-t"
          tabName={board.tabName}
          title={board.title}
          content={board.content}
        />
      ))}
    </ul>
  );
}

export default Board;
