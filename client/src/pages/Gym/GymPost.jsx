import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';
import GymPostName from '../../components/Gym/Post/PostName';
import GymPostAddress from '../../components/Gym/Post/PostAddress';
import GymPostPhoneNumber from '../../components/Gym/Post/PostPhoneNumber';
import GymPostImage from '../../components/Gym/Post/PostImage';
import GymPostFacilities from '../../components/Gym/Post/PostFacilities';
import GymPostDetailPrice from '../../components/Gym/Post/PostDetailPrice';
import GymPostHours from '../../components/Gym/Post/PostHours';
import GymPostPrice from '../../components/Gym/Post/PostPrice';

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
