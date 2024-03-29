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
    gymAxios.get(`/gyms/${id}`).then(res => {
      setGymsDetail(res.data);
    });
  }, []);
  useEffect(() => {
    gymAxios.get(`/gyms/reviews/${id}`).then(res => setReviews(res.data.data));
  }, []);

  return (
    <div>
      {[gymsDetail].map((gym, idx) => (
        <div key={idx}>
          <GymDetailHeader
            gymName={gym.gymName}
            gymBookmarkCnt={gym.gymBookmarkCnt}
            isBookmarked={gym.isBookmarked}
            gymId={gym.gymId}
          />
          <div className="flex overflow-x-scroll w-90">
            {gym.gymImages === undefined ? (
              <div className="h-48 bg-grey w-90" />
            ) : (
              gym.gymImages.map(gymImage => (
                <GymDetailMainImg
                  key={gymImage.gymImageId}
                  gymImage={gymImage.gymImageUrl}
                />
              ))
            )}
          </div>
          <GymDetailList gym={gym} />
        </div>
      ))}
    </div>
  );
}

export default GymDetailPage;
