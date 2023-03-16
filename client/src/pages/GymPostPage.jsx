import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import GymPostName from '../components/Gym/GymPostName';
import GymPostAddress from '../components/Gym/GymPostAddress';
import GymPostPhoneNumber from '../components/Gym/GymPostPhoneNumber';
import GymPostImage from '../components/Gym/GymPostImage';
import GymPostFacilities from '../components/Gym/GymPostFacilities';
import GymPostDetailPrice from '../components/Gym/GymPostDetailPrice';
import GymPostHours from '../components/Gym/GymPostHours';
import GymPostPrice from '../components/Gym/GymPostPrice';

function GymPostPage() {
  return (
    <>
      <Header titleText="게시글 작성" nav="/gyms" />
      <Main>
        <GymPostName />
        <GymPostImage />
        <GymPostFacilities />
        <GymPostPrice />
        <GymPostDetailPrice />
        <GymPostHours />
        <GymPostAddress />
        <GymPostPhoneNumber />
        {/* <GymPostTrainer /> */}
      </Main>
      <Nav />
    </>
  );
}

export default GymPostPage;
