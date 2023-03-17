import GymTagList from './List/GymTagList';
import ReviewScore from './Review/ReviewScore';
import HeartButton from '../UI/Button/HeartButton';

function Gym({ gymName, gymImage, address, prices, facilities }) {
  return (
    <li className="flex pb-3 mb-3 border-b border-[var(--second-border)]">
      <div className="w-40 h-32 rounded-md basis-5/12 bg-var(--second-bg)">
        <img src={gymImage} alt="헬스장 사진" className="w-full h-full" />
      </div>
      <div className="flex flex-col w-48 ml-2 basis-7/12">
        <div className="flex items-center">
          <h3 className="mr-1 font-bold line-clamp-1">{gymName}</h3>
          <ReviewScore />
          <div className="text-xl">
            <HeartButton />
          </div>
        </div>
        <span className="text-sm text-[var(--second)] mb-3 line-clamp-1">
          {address}
        </span>
        <ul className="text-sm text-[var(--second)] list-disc list-inside">
          <li>{prices[0]}</li>
          <li>{prices[1]}</li>
        </ul>
        <GymTagList facilities={facilities} />
      </div>
    </li>
  );
}

export default Gym;
