import PostButton from '../UI/PostButton';
import TextInput from '../UI/TextInput';
import StartIconContainer from './StarIconContainer';

function GymReviewPost() {
  return (
    <div className="pb-3 mb-4 border-b border-grey">
      <StartIconContainer />
      <div className="flex items-center w-90">
        <div className="mr-3 w-[19rem]">
          <TextInput classname="w-full p-2 border-2 rounded-xl focus:outline-[#FCA43B]" />
        </div>
        <div className="mt-2">
          <PostButton />
        </div>
      </div>
    </div>
  );
}

export default GymReviewPost;
