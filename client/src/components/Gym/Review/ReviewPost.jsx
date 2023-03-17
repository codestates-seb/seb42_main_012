import PostButton from '../../UI/Button/PostButton';
import TextInput from '../../UI/Input/TextInput';
import StartIconContainer from '../StarIconContainer';

function GymReviewPost() {
  return (
    <div className="pb-3 mb-4 border-b border-grey">
      <StartIconContainer />
      <div className="flex items-center justify-between w-90">
        <div className="w-full mr-3">
          <TextInput classname="w-full p-2 border border-grey rounded-xl focus:outline-[#FCA43B]" />
        </div>
        <div className="mt-2">
          <PostButton />
        </div>
      </div>
    </div>
  );
}

export default GymReviewPost;
