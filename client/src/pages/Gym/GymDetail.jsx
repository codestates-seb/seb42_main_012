// import { useParams } from 'react-router-dom';
import GymDetailHeader from '../../components/Gym/Detail/DetailHeader';
import GymDetailMainImg from '../../components/Gym/Detail/DetailMainImg';
import GymDetailList from '../../components/Gym/Detail/DetailList';

function GymDetailPage() {
  // const param = useParams();
  return (
    <>
      <GymDetailHeader />
      <GymDetailMainImg />
      <GymDetailList />
    </>
  );
}

export default GymDetailPage;
