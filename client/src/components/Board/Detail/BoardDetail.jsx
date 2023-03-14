import BoardDetailComment from './BoadeDetailComment';
import BoardDetailBody from './BoardDetailBody';
import BoardDetailHeader from './BoardDetailHeader';
import BoardDetailTap from './BoardDetailTab';
import BoardDetailTitle from './BoardDetailTitle';

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
