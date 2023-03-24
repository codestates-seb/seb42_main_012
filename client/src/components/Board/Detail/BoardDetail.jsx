import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';
import BoardDetailComment from './DetailComment';
import BoardDetailBody from './DetailBody';
import BoardDetailHeader from './DetailHeader';
import BoardDetailTap from './DetailTab';
import BoardDetailTitle from './DetailTitle';
import boardStore from '../../../state/boardStore';

function BoardDetail() {
  const { boardDetail, setBoardDetail } = boardStore();
  const { id } = useParams();

  useEffect(() => {
    api.get(`communities/${id}`).then(res => setBoardDetail(res.data));
  }, []);

  return (
    <>
      {[boardDetail].map(board => (
        <div key={board.communityId}>
          <BoardDetailHeader profileImage={board.profileImage} />
          <BoardDetailTap tabName={board.tabName} />
          <BoardDetailTitle title={board.title} />
          <BoardDetailBody content={board.content} />
        </div>
      ))}
      <BoardDetailComment />
    </>
  );
}

export default BoardDetail;
