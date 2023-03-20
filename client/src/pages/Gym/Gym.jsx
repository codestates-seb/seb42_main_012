import { useEffect } from 'react';
import axios from 'axios';

import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';
import useStore from '../../state/useStore';

function GymPage() {
  const { gyms, setGyms, setReviews } = useStore();

  useEffect(() => {
    axios.all([axios.get('/gyms'), axios.get('/gyms/reviews')]).then(
      axios.spread((...res) => {
        setGyms(res[0].data.data.contents);
        setReviews(res[1].data.data.contents);
      }),
    );
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
