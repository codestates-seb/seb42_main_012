import ProfileImg from '../UI/ProfileImg';
import EditButton from '../UI/EditButton';
import DisplayName from '../UI/DisplayName';

function Profile() {
  return (
    <div className="flex items-center">
      <ProfileImg />
      <DisplayName />
      <EditButton />
    </div>
  );
}

export default Profile;
