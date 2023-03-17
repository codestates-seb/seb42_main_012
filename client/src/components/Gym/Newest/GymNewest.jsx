import GymNameButton from '../../UI/Gym/GymNameButton';
import HeartButton from '../../UI/Button/HeartButton';

function GymNewest({ gymName, gymId, gymImage }) {
  return (
    <li className="h-40 mr-1">
      <div className="w-40 h-32 rounded-md">
        <img src={gymImage} alt="헬스장 사진" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <GymNameButton gymName={gymName} gymId={gymId} />
        </div>
        <HeartButton />
      </div>
    </li>
  );
}

export default GymNewest;
