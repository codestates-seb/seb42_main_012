// import { useState } from 'react';
import ProfileImg from '../UI/ProfileImg/ProfileImg';
import EditButton from '../UI/Button/EditButton';
// import useStore from '../../state/useStore';

function Profile() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <ProfileImg page="my" />
      </div>
      <EditButton />
    </div>
  );
}

export default Profile;
