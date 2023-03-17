import GymTagList from './List/GymTagList';
import ReviewScore from './Review/ReviewScore';
import HeartButton from '../UI/Button/HeartButton';

function Gym({ gymName, gymImage, address, prices, facilities }) {
  return (
    <li className="flex pb-3 mb-3 border-b border-[lightGrey]">
      <div className="basis-5/12 bg-grey h-[130px] rounded-md w-40">
        <img src={gymImage} alt="헬스장 사진" className="w-full h-full" />
      </div>
      <div className="flex basis-7/12 flex-col ml-2 w-[190px]">
        <div className="flex items-center">
          <h3 className="mr-1 font-bold line-clamp-1">{gymName}</h3>
          <ReviewScore />
          <div className="text-[20px]">
            <HeartButton />
          </div>
        </div>
        <span className="text-[14px] text-[#8B8B8B] mb-3 line-clamp-1">
          {address}
        </span>
        <ul className="text-[14px] text-[#8B8B8B] list-disc list-inside">
          <li>{prices[0]}</li>
          <li>{prices[1]}</li>
        </ul>
        <GymTagList facilities={facilities} />
      </div>
    </li>
  );
}

export default Gym;
