import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import GymPostName from '../components/Gym/GymPostName';
import GymPostAddress from '../components/Gym/GymPostAddress';
import GymPostPhoneNumber from '../components/Gym/GymPostPhoneNumber';
import GymPostImage from '../components/Gym/GymPostImage';
import GymPostFacilities from '../components/Gym/GymPostFacilities';
import GymPostPrice from '../components/Gym/GymPostPrice';
import GymPostTrainer from '../components/Gym/GymPostTrainer';
import GymPostHours from '../components/Gym/GymPostHours';

function GymPostPage() {
  return (
    <>
      <Header titleText="게시글 작성" nav="/gyms" />
      <Main>
        <GymPostName />
        <GymPostImage />
        <GymPostFacilities />
        <GymPostPrice />
        <GymPostHours />
        <GymPostAddress />
        <GymPostPhoneNumber />
        <GymPostTrainer />
      </Main>
      <Nav />
    </>
  );
}

export default GymPostPage;
