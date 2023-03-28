import { useEffect } from 'react';
import gymAxios from './gymAxios';
import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';
import useGymStore from '../../state/useGymStore';

function GymPage() {
  const { gyms, setGyms, myLocation } = useGymStore();

  const params = {
    latitude: myLocation.La,
    longitude: myLocation.Ma,
  };

  useEffect(() => {
    gymAxios.get('/gyms', { params }).then(res => setGyms(res.data.data));
  }, []);

  return (
    <div className="mb-24">
      <GymNewestList gyms={gyms} />
      <GymTabList />
      <GymList gyms={gyms} />
    </div>
  );
}

export default GymPage;
