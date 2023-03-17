import BoardSearchContainer from '../../components/Board/Container/Search';
import BoardTapList from '../../components/Board/Tab/TabList';
import BoardList from '../../components/Board/BoardList';
import Header from '../../components/layouts/Header/Header';
import Nav from '../../components/layouts/Nav/Nav';
import ChatButton from '../../components/UI/Button/ChatButton';
import Main from '../../components/layouts/Main/Main';

function BoardPage() {
  return (
    <>
      <Header titleText="BOARD" nav="/board/boardpost" />
      <Main>
        <BoardSearchContainer />
        <BoardTapList />
        <BoardList />
        <ChatButton />
      </Main>
      <Nav />
    </>
  );
}

export default BoardPage;
