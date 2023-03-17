import { useEffect, useState } from 'react';
import axios from 'axios';

import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';
import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';

function GymPage() {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    axios.get('/gyms').then(res => {
      setGyms(res.data.data.contents);
    });
  }, []);

  return (
    <>
      <Header titleText="GYM" nav="gympost" />
      <Main>
        <GymNewestList gyms={gyms} />
        <GymTabList />
        <GymList gyms={gyms} />
      </Main>
      <Nav />
    </>
  );
}

export default GymPage;
