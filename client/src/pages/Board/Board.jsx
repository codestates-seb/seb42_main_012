import BoardSearchContainer from '../../components/Board/Container/Search';
import BoardTapList from '../../components/Board/Tab/TabList';
import BoardList from '../../components/Board/BoardList';

function BoardPage() {
  return (
    <div className="mb-32">
      <BoardSearchContainer />
      <BoardTapList />
      <BoardList />
    </div>
  );
}

export default BoardPage;
