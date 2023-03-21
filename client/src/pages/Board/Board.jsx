import { useEffect, useState } from 'react';
import axios from 'axios';

import BoardSearchContainer from '../../components/Board/Container/Search';
import BoardTapList from '../../components/Board/Tab/TabList';
import BoardList from '../../components/Board/BoardList';
import ChatButton from '../../components/UI/Button/ChatButton';

function BoardPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('/communities').then(res => {
      setBoards(res.data.data);
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
