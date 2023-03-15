import GymTagList from './GymTagList';
import ReviewScore from '../ReviewScore';
import HeartButton from '../UI/HeartButton';

function Gym() {
  return (
    <li className="flex pb-3 mb-3 border-b border-[lightGrey]">
      <div className=" bg-grey h-[130px] rounded-md w-40" />
      <div className="flex flex-col ml-2 w-[190px]">
        <div className="flex items-center">
          <h3 className="mr-1 font-bold">버니짐</h3>
          <ReviewScore />
          <div className="text-[20px]">
            <HeartButton />
          </div>
        </div>
        <span className="text-[14px] text-[#8B8B8B] mb-3">
          흥덕구 가경동(1km 이내)
        </span>
        <ul className="text-[14px] text-[#8B8B8B] list-disc list-inside">
          <li>1개월 / 60,000원</li>
          <li>3개월 / 150,000원</li>
        </ul>
        <GymTagList />
      </div>
    </li>
  );
}

export default Gym;
