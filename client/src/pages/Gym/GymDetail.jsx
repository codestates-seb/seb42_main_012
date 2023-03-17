import { useParams } from 'react-router-dom';
import GymDetailHeader from '../../components/Gym/Detail/DetailHeader';
import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';
import GymDetailMainImg from '../../components/Gym/Detail/DetailMainImg';
import GymDetailList from '../../components/Gym/Detail/DetailList';

function GymDetailPage() {
  const param = useParams();
  return (
    <>
      <Header titleText="GYM" nav={`/gyms/${param.id}`} />
      <Main>
        <GymDetailHeader />
        <GymDetailMainImg />
        <GymDetailList />
      </Main>
      <Nav />
    </>
  );
}

export default GymDetailPage;
