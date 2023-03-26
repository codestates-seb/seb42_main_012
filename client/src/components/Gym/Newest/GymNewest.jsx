import { Link } from 'react-router-dom';
import HeartButton from '../../UI/Button/HeartButton';
import pikachu from '../../../assets/images/pikachu.JPG';

function GymNewest({ gymName, gymImage, gymId }) {
  return (
    <li className="mr-1 h-[160px]">
      <Link to={`/gyms/${gymId}`}>
        <div className="w-[160px] h-[130px] rounded-md">
          <img
            src={gymImage.length === 0 ? pikachu : gymImage[0].gymImageUrl}
            alt="헬스장 사진"
            className="w-full h-full"
          />
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
