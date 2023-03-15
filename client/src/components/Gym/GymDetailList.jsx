import GymFacilities from './GymFacilities';
import GymMap from './GymMap';
import GymPrice from './GymPrice';
import GymReviews from './GymReviews';

function GymDetailList() {
  return (
    <div className="mb-32">
      <GymFacilities />
      <GymPrice />
      <GymMap />
      <GymReviews />
    </div>
  );
}

export default GymDetailList;
