import Board from './Board';

function BoardList({ boards }) {
  return (
    <div className="w-full">
      <Board boards={boards} />
    </div>
  );
}

export default BoardList;
