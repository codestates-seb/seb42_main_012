import GymFacilities from '../GymFacilities';
import GymMap from '../Map/Map';
import GymPrice from '../Price/Price';
import GymReviews from '../Review/Reviews';
import GymHours from '../Hours/Hours';
import GymPhoneNumber from '../Phone/PhoneNumber';

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
