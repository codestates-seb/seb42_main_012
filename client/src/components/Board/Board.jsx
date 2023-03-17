import BoardContentList from './BoardContentList';
// import BoardCard from './BoardCard';

function Board() {
  return (
    <>
      <ul>
        <BoardContentList to="/board/:id" classname="mt-4" />
        <BoardContentList to="/board/:id" />
        <BoardContentList to="/board/:id" />
        <BoardContentList to="/board/:id" />
        <BoardContentList to="/board/:id" />
        <BoardContentList to="/board/:id" />
      </ul>
      {/* <BoardCard /> */}
    </>
  );
}

export default Board;
