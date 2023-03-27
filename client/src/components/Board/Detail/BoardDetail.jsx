import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';
import DetailComment from './DetailComment';
import DetailBody from './DetailBody';
import DetailHeader from './DetailHeader';
import DetailTap from './DetailTab';
import DetailTitle from './DetailTitle';
import boardStore from '../../../state/boardStore';

function BoardDetail() {
  const { boardDetail, setBoardDetail } = boardStore();
  const { id } = useParams();

  useEffect(() => {
    api.get(`communities/${id}`).then(res => setBoardDetail(res.data));
  }, []);
  console.log(boardDetail);
  return (
    <>
      <DetailHeader
        profileImage={boardDetail.profileImage}
        displayName={boardDetail.displayName}
        createdAt={boardDetail.createdAt}
        bookmarkCnt={boardDetail.bookmarkCnt}
      />
      <DetailTap tabName={boardDetail.tabName} />
      {[boardDetail].map(boardDetails => (
        <div key={boardDetails.communityId}>
          <DetailTitle title={boardDetails.title} />
          <DetailBody content={boardDetails.content} />
          <DetailComment />
        </div>
      ))}
    </>
  );
}

export default BoardDetail;
