import BoardSearchContainer from '../../components/Board/Container/Search';
import BoardTapList from '../../components/Board/Tab/TabList';
import BoardList from '../../components/Board/BoardList';
import ChatButton from '../../components/UI/Button/ChatButton';

function BoardPage() {
  return (
    <>
      <BoardSearchContainer />
      <BoardTapList />
      <BoardList />
      <ChatButton />
    </>
  );
}

export default BoardPage;
