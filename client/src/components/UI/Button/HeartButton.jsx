import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import gymAxios from '../../../pages/Gym/gymAxios';
import useGymStore from '../../../state/useGymStore';

//

function HeartButton({ isBookmarked, gymId }) {
  const [heartChange, setHeartChange] = useState(isBookmarked);
  const { setGyms } = useGymStore();
  const params = {
    filter: 'distance',
    latitude: 36.6172509,
    longitude: 127.4501604,
  };

  const heartHandler = async () => {
    await gymAxios
      .post(`gyms/bookmarks/${gymId}`)
      .then(res => console.log(res));
    await gymAxios.get('/gyms', { params }).then(res => setGyms(res.data.data));
    setHeartChange(!heartChange);
  };

  return (
    <button type="button">
      {heartChange ? (
        <AiFillHeart onClick={heartHandler} />
      ) : (
        <AiOutlineHeart onClick={heartHandler} />
      )}
    </button>
  );
}

export default HeartButton;
