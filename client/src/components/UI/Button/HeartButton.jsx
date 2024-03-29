import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import gymAxios from '../../../pages/Gym/gymAxios';
import useGymStore from '../../../state/useGymStore';
// import useBoardStore from '../../../state/useBoardStore';
// import api from '../../../utils/api';

function HeartButton({ bookmarked, gymId }) {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const { setGyms, setGymsDetail, gymsDetail } = useGymStore();
  // const { setBoards, boards } = useBoardStore();
  const check =
    path === 'gyms'
      ? bookmarked
      : gymsDetail.isBookmarked
      ? path === 'board'
      : bookmarked;
  const [heartChange, setHeartChange] = useState(check);
  // path === 'board' ? bookmarked : isBookmarked,
  const params = {
    filter: 'distance',
    latitude: 37.490231,
    longitude: 127.01645,
  };

  const heartHandler = async () => {
    if (path === 'gyms' || path === `gyms/${gymId}`) {
      await gymAxios.post(`gyms/bookmarks/${gymId}`);
      await gymAxios.get(`gyms/${gymId}`).then(res => {
        setGymsDetail(res.data);
        setHeartChange(res.data.isBookmarked);
      });
      await gymAxios.get('/gyms', { params }).then(res => {
        setGyms(res.data.data);
      });
    }
    // } else if (path === 'board') {
    //   await api.post(`communities/bookmarks/${communityId}`);
    //   await api.get(`communities/${communityId}`).then(res => {
    //     setHeartChange(res.data.contents.isBookmarked);
    //   });
    //   await api.get('/communities').then(res => {
    //     setBoards(res.data.contents);
    //   });
    // }
  };
  // console.log(heartChange);
  // console.log(boards.isBookmarked);
  // console.log(boards);

  return (
    <button type="button">
      {heartChange ? (
        <div className="text-orange">
          <AiFillHeart onClick={heartHandler} />
        </div>
      ) : (
        <AiOutlineHeart onClick={heartHandler} />
      )}
    </button>
  );
}

export default HeartButton;
