// import GymFacilities from '../GymFacilities';
import GymMap from '../Map/Map';
import GymPrice from '../Price/Price';
import GymReviews from '../Review/Reviews';
import GymHours from '../Hours/Hours';
import GymPhoneNumber from '../Phone/PhoneNumber';
import GymFacilities from '../GymFacilities';

function GymDetailList({ gym }) {
  return (
    <div className="mb-32">
      {gym.facilities === undefined ? null : (
        <GymFacilities facilities={gym.facilities} />
      )}
      <GymPrice detailPrices={gym.detailPrices} />
      <GymHours businessHours={gym.businessHours} />
      <GymMap gymAddress={gym.address} />
      <GymPhoneNumber phoneNumber={gym.phoneNumber} />
      <GymReviews />
    </div>
  );
}

export default GymDetailList;
