// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import GymDetailHeader from '../../components/Gym/Detail/DetailHeader';
import GymDetailMainImg from '../../components/Gym/Detail/DetailMainImg';
import GymDetailList from '../../components/Gym/Detail/DetailList';
import useStore from '../../state/useStore';
import api from '../../utils/api';

function GymDetailPage() {
  const { gymsDetail, setGymsDetail } = useStore();
  const { id } = useParams();

  useEffect(() => {
    api.get(`gyms/${id}`).then(res => setGymsDetail(res.data));
  }, []);

  return (
    <>
      {[gymsDetail].map(gym => (
        <div key={gym.id}>
          <GymDetailHeader
            gymName={gym.gymName}
            BookmarkCnt={gym.gymBookmarkCnt}
          />
          <GymDetailMainImg gymImage={gym.gymImage} />
          <GymDetailList gym={gym} />
        </div>
      ))}
    </>
  );
}

export default GymDetailPage;
