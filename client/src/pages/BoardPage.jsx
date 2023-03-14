import BoardSearchContainer from '../components/Board/BoardSearchContainer';
import BoardTapList from '../components/Board/BoardTabList';
import BoardList from '../components/Board/BoardList';
import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function BoardPage() {
  return (
    <>
      <Header titleText="BOARD" />
      <Main>
        <BoardSearchContainer />
        <BoardTapList />
        <BoardList />
      </Main>
      <Nav />
    </>
  );
}

export default BoardPage;
