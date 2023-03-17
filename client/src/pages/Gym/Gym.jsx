import { useEffect, useState } from 'react';
import axios from 'axios';

import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';

function GymPage() {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    axios.get('/gyms').then(res => {
      setGyms(res.data.data.contents);
    });
  }, []);

  return (
    <>
      <GymNewestList gyms={gyms} />
      <GymTabList />
      <GymList gyms={gyms} />
    </>
  );
}

export default GymPage;
