import BoardContentList from './BoardContentList';
// import BoardCard from './BoardCard';

function Board({ boards }) {
  return (
    <ul>
      {boards.map(board => (
        <BoardContentList
          to="/board/:id"
          classname="border-t"
          key={board.boardId}
          id={board.boardId}
          tabName={board.tabName}
          title={board.title}
          content={board.content}
        />
      ))}
    </ul>
  );
}

export default Board;
