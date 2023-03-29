import { useEffect } from 'react';
import gymAxios from '../../../pages/Gym/gymAxios';
import useGymStore from '../../../state/useGymStore';
import GymNewest from './GymNewest';

function GymNewestList() {
  const { gymNewest, setGymNewest } = useGymStore();
  const params = {
    filter: 'distance',
    latitude: 36.6172509,
    longitude: 127.4501604,
  };

  useEffect(() => {
    gymAxios.get('/gyms', { params }).then(res => setGymNewest(res.data.data));
  }, []);

  return (
    <div className="border-b border-[var(--second-border)]">
      <h2 className="text-[14px] font-bold">신규 헬스장</h2>
      <ul className="flex overflow-x-scroll scrollbar-hide">
        {gymNewest.map(gym => (
          <GymNewest
            key={gym.gymId}
            gymId={gym.gymId}
            gymName={gym.gymName}
            gymImage={gym.gymImageUrl}
            isBookmarked={gym.isBookmarked}
          />
        ))}
      </ul>
    </div>
  );
}

export default GymNewestList;
