import Nav from '../../components/layouts/Nav/Nav';
import Main from '../../components/layouts/Main/Main';
import Header from '../../components/layouts/Header/Header';
import BoardEdit from '../../components/Board/BoardEdit';

function BoardEditPage() {
  return (
    <>
      <Header titleText="게시글 수정" nav="/board" />
      <Main>
        <BoardEdit />
      </Main>
      <Nav />
    </>
  );
}

export default BoardEditPage;
