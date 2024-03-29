import { Link } from 'react-router-dom';
import GymTagList from './List/GymTagList';
import HeartButton from '../UI/Button/HeartButton';
import ReviewScoreList from './Review/ReviewScoreList';

// price
function Gym({
  gymName,
  gymImageUrl,
  address,
  gymId,
  facilities,
  price,
  businessHours,
  bookmarked,
}) {
  return (
    <li className="flex pb-3 mb-3 border-b border-[var(--second-border)]">
      <div className="w-40 h-32 rounded-md basis-5/12 bg-var(--second-bg)">
        <Link to={`/gyms/${gymId}`}>
          {gymImageUrl === '' ? (
            <div className="w-full h-full bg-grey" />
          ) : (
            <img
              src={gymImageUrl}
              alt="헬스장 사진"
              className="object-cover w-full h-full "
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col w-48 ml-2 basis-7/12">
        <div className="flex items-center">
          <Link to={`/gyms/${gymId}`}>
            <h3 className="mr-1 font-bold line-clamp-1">{gymName}</h3>
          </Link>
          <ReviewScoreList gymId={gymId} />
          <div className="text-xl">
            <HeartButton bookmarked={bookmarked} gymId={gymId} />
          </div>
        </div>
        <span className="text-sm text-[var(--second)] mb-1 line-clamp-1">
          {address}
        </span>
        <span className="text-sm text-[var(--second)] mb-1 list-disc list-inside line-clamp-1">
          {price}
        </span>
        <span className="text-sm text-[var(--second)] list-disc list-inside line-clamp-1">
          {businessHours}
        </span>
        {facilities === undefined ? null : (
          <GymTagList facilities={facilities} />
        )}
      </div>
    </li>
  );
}

export default Gym;
