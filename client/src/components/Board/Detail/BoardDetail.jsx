import BoardDetailComment from './DetailComment';
import BoardDetailBody from './DetailBody';
import BoardDetailHeader from './DetailHeader';
import BoardDetailTap from './DetailTab';
import BoardDetailTitle from './DetailTitle';

function BoardDetail({ comments, members }) {
  return (
    <>
      <BoardDetailHeader />
      <BoardDetailTap />
      <BoardDetailTitle />
      <BoardDetailBody />
      <BoardDetailComment comments={comments} members={members} />
    </>
  );
}

export default BoardDetail;
