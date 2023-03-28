import gymAxios from '../../../pages/Gym/gymAxios';
import useGymStore from '../../../state/useGymStore';

function TabButton({ tabName, setFilterOn, idx, filterOn, classname, filter }) {
  const { setGyms } = useGymStore();

  const params = {
    filter,
    // latitude: location.coordinates.lat,
    // longitude: location.coordinates.lng,
    latitude: 36.6172509,
    longitude: 127.4501604,
  };

  const buttonHandler = () => {
    const tr = filterOn.map((i, index) => index === idx);
    setFilterOn(tr);
    gymAxios.get('/gyms', { params }).then(res => setGyms(res.data.data));
  };
  return (
    <li>
      <div className={classname}>
        <button type="button" onClick={buttonHandler} className="w-full h-full">
          {tabName}
        </button>
      </div>
    </li>
  );
}

export default TabButton;
