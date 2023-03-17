import GymFacilities from '../GymFacilities';
import GymMap from '../Map/GymMap';
import GymPrice from '../Price/GymPrice';
import GymReviews from '../Review/GymReviews';
import GymHours from '../Hours/GymHours';
import GymPhoneNumber from '../Phone/GymPhoneNumber';

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
