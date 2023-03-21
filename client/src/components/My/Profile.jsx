import { useRef, useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import ProfileImg from '../UI/ProfileImg/ProfileImg';
import DisplayName from '../UI/DisplayName/DisplayName';
import EditButton from '../UI/Button/EditButton';

function Profile() {
  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const fileInput = useRef(null);

  const imageHandler = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <ProfileImg page="my" src={image} alt="profile" />
        <BiImageAdd
          className="absolute bottom-0 right-0 p-2 text-4xl bg-white rounded-full text-[var(--second)]"
          onClick={() => fileInput.current.click()}
        />
        <input
          className="hidden"
          type="file"
          name="profile"
          accept="image/jpg,impge/png,image/jpeg"
          ref={fileInput}
          onChange={imageHandler}
        />
      </div>
      <DisplayName displayNames="" />
      <input type="text" name="displayName" />
      <EditButton />
    </div>
  );
}

export default Profile;
