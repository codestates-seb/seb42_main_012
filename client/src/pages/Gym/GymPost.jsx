import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';
import GymPostName from '../../components/Gym/Post/GymPostName';
import GymPostAddress from '../../components/Gym/Post/GymPostAddress';
import GymPostPhoneNumber from '../../components/Gym/Post/GymPostPhoneNumber';
import GymPostImage from '../../components/Gym/Post/GymPostImage';
import GymPostFacilities from '../../components/Gym/Post/GymPostFacilities';
import GymPostDetailPrice from '../../components/Gym/Post/GymPostDetailPrice';
import GymPostHours from '../../components/Gym/Post/GymPostHours';
import GymPostPrice from '../../components/Gym/Post/GymPostPrice';

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
