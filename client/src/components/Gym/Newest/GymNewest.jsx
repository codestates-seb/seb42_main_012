import { Link } from 'react-router-dom';

function GymNewest({ gymName, gymImage, gymId }) {
  return (
    <li className="mr-1 h-[160px]">
      <Link to={`/gyms/${gymId}`}>
        <div className="w-[160px] h-[130px] rounded-md">
          {gymImage === undefined ? (
            <div className="w-full h-full bg-grey" />
          ) : (
            <img src={gymImage} alt="헬스장 사진" className="w-full h-full" />
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[14px]">
            <span>{gymName}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default GymNewest;
