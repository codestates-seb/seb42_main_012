import GymFacilities from './GymFacilities';
import GymMap from './GymMap';
import GymPrice from './GymPrice';
import GymReviews from './GymReviews';
import GymHours from './GymHours';
import GymPhoneNumber from './GymPhoneNumber';

function GymDetailList() {
  return (
    <div className="mb-32">
      <GymFacilities />
      <GymPrice />
      <GymHours />
      <GymMap />
      <GymPhoneNumber />
      <GymReviews />
    </div>
  );
}

export default GymDetailList;
