import GymPostName from '../../components/Gym/Post/PostName';
import GymPostAddress from '../../components/Gym/Post/PostAddress';
import GymPostPhoneNumber from '../../components/Gym/Post/PostPhoneNumber';
import GymPostImage from '../../components/Gym/Post/PostImage';
import GymPostFacilities from '../../components/Gym/Post/PostFacilities';
import GymPostDetailPrice from '../../components/Gym/Post/PostDetailPrice';
import GymPostHours from '../../components/Gym/Post/PostHours';
import GymPostPrice from '../../components/Gym/Post/PostPrice';
import BasicButton from '../../components/UI/Button/BasicButton';

function GymPostPage() {
  return (
    <>
      <GymPostName />
      <GymPostImage />
      <GymPostFacilities />
      <GymPostPrice />
      <GymPostDetailPrice />
      <GymPostHours />
      <GymPostAddress />
      <GymPostPhoneNumber />
      {/* <GymPostTrainer /> */}
      <BasicButton page="board" text="Post" nav="/gyms" />
    </>
  );
}

export default GymPostPage;
