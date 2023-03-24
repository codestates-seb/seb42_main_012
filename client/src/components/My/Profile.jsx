import { useState } from 'react';
import ProfileImg from '../UI/ProfileImg/ProfileImg';
import DisplayName from '../UI/DisplayName/DisplayName';
import EditButton from '../UI/Button/EditButton';
import useStore from '../../state/useStore';

function Profile() {
  const { myElements } = useStore();
  const [profileImage, setProfileImageUrl] = useState(null);

  return (
    <div className="flex items-center">
      <div className="relative">
        {myElements && (
          <ProfileImg
            profileImage={profileImage}
            setProfileImageUrl={setProfileImageUrl}
            page="my"
          />
        )}
      </div>

      <DisplayName displayName={myElements.displayName} />

      <input type="text" name="displayName" />
      <EditButton />
    </div>
  );
}

export default Profile;
