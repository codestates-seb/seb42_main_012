import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BoardTapList from '../Tab/TabList';
import BoardPostTitle from './PostTitle';
import BoardPostBody from './PostBody';
import BasicButton from '../../UI/Button/BasicButton';
import api from '../../../utils/api';

function BoardPost() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    const boardsData = {
      title: data.title,
      content: data.content,
      tabId: 1,
    };

    // 자유게시판 꿀팁 오운완 자세피드백 파트너모집

    const formData = new FormData();
    const blob = new Blob([JSON.stringify(boardsData)], {
      type: 'application/json',
    });

    formData.append('request', blob);

    await api
      .post('/communities', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(navigate('/board'))
      .catch(() => alert('요청실패'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-t border-[var(--second-border)]">
        <BoardTapList />
        <BoardPostTitle register={register} />
        <BoardPostBody register={register} />
        <div className="mt-1">
          <BasicButton page="board" text="이미지 업로드" />
          <BasicButton page="board" text="Post" />
        </div>
      </div>
    </form>
  );
}

export default BoardPost;
