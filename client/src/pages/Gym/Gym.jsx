import { useEffect } from 'react';
import api from '../../utils/api';
import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';
import useStore from '../../state/useStore';

function GymPage() {
  const { gyms, setGyms } = useStore();

  useEffect(() => {
    api.get('/gyms?lastFeedId=10').then(res => setGyms(res.data));
  }, []);

  return (
    <div className="mb-20">
      <GymNewestList gyms={gyms} />
      <GymTabList />
      <GymList gyms={gyms} />
    </div>
  );
}

export default GymPage;
