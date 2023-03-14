import BoardDetail from '../components/Board/Detail/BoardDetail';
import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function BoardDetailPage() {
  return (
    <>
      <Header titleText="BOARD" />
      <Main>
        <BoardDetail />
      </Main>
      <Nav />
    </>
  );
}

export default BoardDetailPage;
