import BoardSearchContainer from '../../components/Board/Container/Search';
import BoardTapList from '../../components/Board/Tab/TabList';
import BoardList from '../../components/Board/BoardList';

function BoardPage() {
  return (
    <>
      <BoardSearchContainer />
      <BoardTapList />
      <BoardList />
    </>
  );
}

export default BoardPage;
