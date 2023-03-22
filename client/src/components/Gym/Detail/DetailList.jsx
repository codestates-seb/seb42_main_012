import GymFacilities from '../GymFacilities';
import GymMap from '../Map/Map';
import GymPrice from '../Price/Price';
import GymReviews from '../Review/Reviews';
import GymHours from '../Hours/Hours';
import GymPhoneNumber from '../Phone/PhoneNumber';
import Location from './Location';

function GymDetailList({ gym }) {
  return (
    <div className="mb-32">
      <GymFacilities facilities={gym.facilities} />
      <GymPrice detailPrices={gym.detailPrices} />
      <GymHours businessHours={gym.businessHours} />
      <GymMap gymAddress={gym.address} />
      <Location />
      <GymPhoneNumber phoneNumber={gym.phoneNumber} />
      <GymReviews />
    </div>
  );
}

export default GymDetailList;
