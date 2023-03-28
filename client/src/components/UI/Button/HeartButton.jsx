import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import gymAxios from '../../../pages/Gym/gymAxios';
import useGymStore from '../../../state/useGymStore';

function HeartButton({ bookmarked, isBookmarked, gymId }) {
  const location = useLocation();
  const path = location.pathname;
  const { setGyms, setGymsDetail } = useGymStore();
  const [heartChange, setHeartChange] = useState(
    path === '/gyms' ? bookmarked : isBookmarked,
  );

  const params = {
    filter: 'distance',
    latitude: 36.6172509,
    longitude: 127.4501604,
  };

  const heartHandler = async () => {
    await gymAxios.post(`gyms/bookmarks/${gymId}`);
    await gymAxios.get(`gyms/${gymId}`).then(res => {
      setGymsDetail(res.data);
      setHeartChange(res.data.isBookmarked);
    });
    await gymAxios.get('/gyms', { params }).then(res => {
      setGyms(res.data.data);
    });
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
