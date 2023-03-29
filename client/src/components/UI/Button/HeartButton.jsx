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
  // const { setBoards } = useBoardStore();
  const check = path === 'gyms' ? bookmarked : gymsDetail.isBookmarked;
  const [heartChange, setHeartChange] = useState(check);
  // path === 'board' ? bookmarked : isBookmarked,
  const params = {
    filter: 'distance',
    latitude: 36.6172509,
    longitude: 127.4501604,
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
    // if (path === 'board') {
    //   await api.post(`communities/bookmarks/${communityId}`);
    //   await api.get(`communities/${communityId}`).then(res => {
    //     setHeartChange(res.data.isBookmarked);
    //   });
    //   await api.get('/communities').then(res => {
    //     setBoards(res.data.data);
    //   });
    // }
  };

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
