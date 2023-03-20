import { useEffect, useState } from 'react';
import axios from 'axios';

import BoardSearchContainer from '../../components/Board/Container/Search';
import BoardTapList from '../../components/Board/Tab/TabList';
import BoardList from '../../components/Board/BoardList';
import ChatButton from '../../components/UI/Button/ChatButton';
import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';

function BoardPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('/communities').then(res => {
      setBoards(res.data.data);
    });
  }, []);

  return (
    <>
      <Header titleText="BOARD" nav="/board/boardpost" />
      <Main>
        <BoardSearchContainer />
        <BoardTapList />
        <BoardList boards={boards} />
        <ChatButton />
      </Main>
      <Nav />
    </>
  );
}

export default BoardPage;
