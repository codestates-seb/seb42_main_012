import { useEffect } from 'react';
// import useGeolocation from 'react-hook-geolocation';
import gymAxios from './gymAxios';
import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';
import useGymStore from '../../state/useGymStore';
// import useGeoLocation from '../../utils/useGeoLocation';

function GymPage() {
  const { gyms, setGyms } = useGymStore();
  // const geolocation = useGeolocation();
  // const location = useGeoLocation();

  const params = {
    filter: 'distance',
    // latitude: location.coordinates.lat,
    // longitude: location.coordinates.lng,
    latitude: 36.6172509,
    longitude: 127.4501604,
  };

  useEffect(() => {
    // if (location.loaded === true) {
    gymAxios.get('/gyms', { params }).then(res => setGyms(res.data.data));
    // }
  }, []);
  // }, [location]);

  return (
    <div className="mb-24">
      <GymNewestList gyms={gyms} />
      <GymTabList />
      <GymList gyms={gyms} />
    </div>
  );
}

export default GymPage;
