import { useEffect } from 'react';
import axios from 'axios';

import BoardSearchContainer from '../../components/Board/Container/Search';
import BoardTapList from '../../components/Board/Tab/TabList';
import BoardList from '../../components/Board/BoardList';
import ChatButton from '../../components/UI/Button/ChatButton';

import useStore from '../../state/useStore';

function BoardPage() {
  const { boards, setBoards, setMembers } = useStore();

  useEffect(() => {
    axios.get('/communities').then(res => {
      setBoards(res.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get('/members/common').then(res => {
      setMembers(res.data);
    });
  }, []);

  return (
    <>
      <BoardSearchContainer />
      <BoardTapList />
      <BoardList boards={boards} />
      <ChatButton />
    </>
  );
}

export default BoardPage;
