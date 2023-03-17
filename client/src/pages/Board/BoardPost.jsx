import Main from '../../components/layouts/Main/Main';
import Header from '../../components/layouts/Header/Header';
import BoardPost from '../../components/Board/Post/BoardPost';

function BoardPostPage() {
  return (
    <>
      <Header titleText="게시글 작성" nav="/board" />
      <Main>
        <BoardPost />
      </Main>
    </>
  );
}

export default BoardPostPage;
