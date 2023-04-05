import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../utils/api';
import DetailComment from './DetailComment';
import DetailBody from './DetailBody';
import DetailHeader from './DetailHeader';
import DetailTap from './DetailTab';
import DetailTitle from './DetailTitle';
import useBoardStore from '../../../state/useBoardStore';
import BoardDetailImage from './BoardDetailImage';

function BoardDetail() {
  const { boardDetail, setBoardDetail } = useBoardStore();
  const { id } = useParams();

  useEffect(() => {
    api.get(`communities/${id}`).then(res => setBoardDetail(res.data));
  }, []);

  return (
    <>
      <DetailHeader bookmarkCnt={boardDetail.bookmarkCnt} />
      <DetailTap tabName={boardDetail.tabName} />

      <DetailTitle title={boardDetail.title} />
      {boardDetail.contentImages && boardDetail.contentImages.length > 0 ? (
        <BoardDetailImage
          contentImages={boardDetail.contentImages[0].contentImageUrl}
        />
      ) : null}
      <DetailBody content={boardDetail.content} />
      <DetailComment />
    </>
  );
}

export default BoardDetail;
