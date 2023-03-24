import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BoardTapList from '../Tab/TabList';
import BoardPostTitle from './PostTitle';
import BoardPostBody from './PostBody';
import BasicButton from '../../UI/Button/BasicButton';
import boardStore from '../../../state/boardStore';
// import api from '../../../utils/api';
import boardAxios from './boardAxios';

function BoardPost() {
  const { register, handleSubmit } = useForm();

  const { boards } = boardStore();
  const navigate = useNavigate();

  const onSubmit = async data => {
    const boardsData = {
      communityId: boards.length + 1,
      title: data.title,
      content: data.content,
      tabName: '꿀팁',
    };

    console.log(boardsData);
    await boardAxios.post('/board', boardsData);
    navigate('/board');
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
