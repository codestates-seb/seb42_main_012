import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BoardPostTitle from './PostTitle';
import BoardPostBody from './PostBody';
import BasicButton from '../../UI/Button/BasicButton';
import api from '../../../utils/api';
import BoardPostTapList from './PostTabList';
import BoardImageButton from '../../UI/Board/BoardImageButton';
import useBoardStore from '../../../state/useBoardStore';

function BoardPost() {
  const { setBoards } = useBoardStore();
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const [tabId, setTabId] = useState(1);

  const image = watch('image');
  const onSubmit = async data => {
    const imageData = data.image[0];
    const boardsData = {
      title: data.title,
      content: data.content,
      tabId,
    };

    const formData = new FormData();
    const blob = new Blob([JSON.stringify(boardsData)], {
      type: 'application/json',
    });

    formData.append('request', blob);
    formData.append('files', imageData);

    await api
      .post('/communities', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(navigate('/board'))
      .catch(() => alert('요청실패'));

    api
      .get('/communities?lastFeedId')
      .then(res => setBoards(res.data.contents));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-t border-[var(--second-border)]">
        <BoardPostTapList setTabId={setTabId} />
        <BoardPostTitle register={register} />
        <BoardPostBody register={register} />
        <div className="mt-1">
          <BoardImageButton register={register} image={image} />
          <BasicButton page="board" text="Post" />
        </div>
      </div>
    </form>
  );
}

export default BoardPost;
