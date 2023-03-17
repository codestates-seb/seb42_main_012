import HeartContainer from '../../UI/HeartContainer';
import ReviewScore from '../Review/ReviewScore';

function GymDetailHeader() {
  return (
    <div className="flex items-center">
      <h3 className="text-[20px] font-bold mr-1 text-[#505050]">스마트짐</h3>
      <ReviewScore />
      <HeartContainer />
    </div>
  );
}

export default GymDetailHeader;
