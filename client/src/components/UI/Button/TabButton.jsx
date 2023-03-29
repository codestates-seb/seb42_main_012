import { useLocation } from 'react-router-dom';
import gymAxios from '../../../pages/Gym/gymAxios';
import useBoardStore from '../../../state/useBoardStore';
import useGymStore from '../../../state/useGymStore';
import api from '../../../utils/api';

function TabButton({ tabName, setFilterOn, idx, filterOn, classname, filter }) {
  const { setGyms } = useGymStore();
  const { setBoards } = useBoardStore();
  const location = useLocation();
  const path = location.pathname.slice(1);

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
    if (path === 'board') {
      if (filter === 0) {
        api.get('/communities?lastFeedId=').then(res => {
          setBoards(res.data.contents);
        });
      } else {
        api.get(`/communities/tab/${filter}?lastFeedId=`).then(res => {
          setBoards(res.data.contents);
        });
      }
    } else {
      gymAxios.get('/gyms', { params }).then(res => setGyms(res.data.data));
    }
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
