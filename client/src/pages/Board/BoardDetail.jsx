import { useEffect, useState } from 'react';
import axios from 'axios';
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
      <BoardDetail comments={comments} members={members} />
    </>
  );
}

export default BoardDetailPage;
