import ProfileImg from '../UI/ProfileImg';
import EditButton from '../UI/EditButton';
import DisplayName from '../UI/DisplayName';

function Profile() {
  const imageUrl =
    'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';

  return (
    <div className="flex items-center">
      <ProfileImg page="my" src={imageUrl} alt="profile" />
      <DisplayName />
      <EditButton />
    </div>
  );
}

export default Profile;
