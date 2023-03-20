import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';
import BoardDetail from '../../components/Board/Detail/BoardDetail';

function BoardDetailPage() {
  const [comments, setComments] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/members/common').then(res => {
      setMembers(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get('/communities/comments').then(res => {
      setComments(res.data.data);
    });
  }, []);

  return (
    <>
      <Header titleText="BOARD" nav="/board/boardpost" />
      <Main>
        <BoardDetail comments={comments} members={members} />
      </Main>
      <Nav />
    </>
  );
}

export default BoardDetailPage;
