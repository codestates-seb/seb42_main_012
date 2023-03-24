// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import GymDetailHeader from '../../components/Gym/Detail/DetailHeader';
import GymDetailMainImg from '../../components/Gym/Detail/DetailMainImg';
import GymDetailList from '../../components/Gym/Detail/DetailList';
import useGymStore from '../../state/useGymStore';
// import api from '../../utils/api';
import gymAxios from './gymAxios';

function GymDetailPage() {
  const { gymsDetail, setGymsDetail, setReviews } = useGymStore();
  const { id } = useParams();

  useEffect(() => {
    gymAxios.get(`/gyms/${id}`).then(res => setGymsDetail(res.data));
  }, []);

  useEffect(() => {
    gymAxios
      .get(`/gyms/reviews/${id}?lastFeedId=10`)
      .then(res => setReviews(res.data));
  }, []);

  return (
    <>
      {gymsDetail.map(gym => (
        <div key={gym.id}>
          <GymDetailHeader
            gymName={gym.gymName}
            BookmarkCnt={gym.gymBookmark_Cnt}
          />
          <GymDetailMainImg gymImage={gym.gymImage} />
          <GymDetailList gym={gym} />
        </div>
      ))}
    </>
  );
}

export default GymDetailPage;
