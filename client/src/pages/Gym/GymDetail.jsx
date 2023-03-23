// import { useParams } from 'react-router-dom';
import GymDetailHeader from '../../components/Gym/Detail/DetailHeader';
import GymDetailMainImg from '../../components/Gym/Detail/DetailMainImg';
import GymDetailList from '../../components/Gym/Detail/DetailList';
import useStore from '../../state/useStore';

function GymDetailPage() {
  const { gymsDetail } = useStore();
  // const { id } = useParams();

  return (
    <>
      {gymsDetail.map(gym => (
        <div key={gym.gymId}>
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
