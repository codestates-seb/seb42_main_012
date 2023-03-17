import GymNameButton from '../../UI/Gym/GymNameButton';
import HeartButton from '../../UI/Button/HeartButton';
import pikachu from '../pikachu.JPG';

function GymNewest({ gymName, gymId }) {
  return (
    <li className="mr-1 h-[160px]">
      <div className="w-[160px] h-[130px] rounded-md">
        <img src={pikachu} alt="귀여운 피카츄" />
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
