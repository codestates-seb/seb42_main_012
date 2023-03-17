import BoardDetailComment from './DetailComment';
import BoardDetailBody from './DetailBody';
import BoardDetailHeader from './DetailHeader';
import BoardDetailTap from './DetailTab';
import BoardDetailTitle from './DetailTitle';

function BoardDetail() {
  return (
    <>
      <BoardDetailHeader />
      <BoardDetailTap />
      <BoardDetailTitle />
      <BoardDetailBody />
      <BoardDetailComment />
    </>
  );
}

export default BoardDetail;
