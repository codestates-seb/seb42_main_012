import { useParams } from 'react-router-dom';

import BoardDetailComment from './DetailComment';
import BoardDetailBody from './DetailBody';
import BoardDetailHeader from './DetailHeader';
import BoardDetailTap from './DetailTab';
import BoardDetailTitle from './DetailTitle';
import useStore from '../../../state/useStore';

function BoardDetail() {
  const { boards } = useStore();
  const { id } = useParams();
  const boardDetailId = boards.filter(board => board.boardId === Number(id));

  return (
    <>
      {boardDetailId.map(board => (
        <div key={board.boardId}>
          <BoardDetailHeader profileImage={board.profileImage} />
          <BoardDetailTap tabName={board.tabName} />
          <BoardDetailTitle title={board.title} />
          <BoardDetailBody content={board.content} />
          <BoardDetailComment />
        </div>
      ))}
    </>
  );
}

export default BoardDetail;
