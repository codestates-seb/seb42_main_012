import { useEffect, useState } from 'react';
// import useGeolocation from 'react-hook-geolocation';
import gymAxios from './gymAxios';
import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';
import useGymStore from '../../state/useGymStore';
// import useGeoLocation from '../../utils/useGeoLocation';

function GymPage() {
  const { gyms, setGyms, setGymsDetail } = useGymStore();
  const filters = ['distance', 'grade', 'bookmark'];
  const [filterOn, setFilterOn] = useState([true, false, false]);
  // const geolocation = useGeolocation();
  // const location = useGeoLocation();

  const params = {
    filter: 'distance',
    // latitude: location.coordinates.lat,
    // longitude: location.coordinates.lng,
    latitude: 37.490231,
    longitude: 127.01645,
  };

  useEffect(() => {
    // if (location.loaded === true) {
    gymAxios.get('/gyms', { params }).then(res => setGyms(res.data.data));
    setGymsDetail({});
    // }
  }, []);
  // }, [location]);

  return (
    <div className="mb-24">
      <GymNewestList />
      <GymTabList
        filters={filters}
        filterOn={filterOn}
        setFilterOn={setFilterOn}
      />
      <GymList gyms={gyms} />
    </div>
  );
}

export default GymPage;
