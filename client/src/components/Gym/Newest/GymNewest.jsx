import GymNameButton from '../../UI/Gym/GymNameButton';
import HeartButton from '../../UI/Button/HeartButton';

function GymNewest({ gymName, gymImage, gymId }) {
  return (
    <li className="mr-1 h-[160px]">
      <div className="w-[160px] h-[130px] rounded-md">
        <img src={gymImage} alt="헬스장 사진" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-[14px]">
          <GymNameButton gymName={gymName} gymId={gymId} />
        </div>
        <HeartButton />
      </div>
    </li>
  );
}

export default GymNewest;
