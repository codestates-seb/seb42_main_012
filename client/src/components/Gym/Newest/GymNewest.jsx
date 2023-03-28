import { Link } from 'react-router-dom';
import HeartButton from '../../UI/Button/HeartButton';

function GymNewest({ gymName, gymImage, gymId }) {
  return (
    <li className="mr-1 h-[160px]">
      <Link to={`/gyms/${gymId}`}>
        <div className="w-[160px] h-[130px] rounded-md">
          {gymImage.length === 0 ? (
            <div className="w-full h-full bg-grey" />
          ) : (
            <img src={gymImage} alt="헬스장 사진" className="w-full h-full" />
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[14px]">
            <span>{gymName}</span>
          </div>
          <HeartButton />
        </div>
      </Link>
    </li>
  );
}

export default GymNewest;
