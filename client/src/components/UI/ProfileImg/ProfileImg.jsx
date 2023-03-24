import { useState, useRef } from 'react';
import axios from 'axios';
import { BiImageAdd } from 'react-icons/bi';

function ProfileImg({ page }) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  // { page, profileImage }
  const fileInput = useRef(null);

  let classes = 'bg-[var(--second)] rounded-full ';

  if (page === 'my') {
    classes += 'w-20 h-20';
  } else if (page === 'board') {
    classes += 'w-10 h-10';
  }

  const uploadToClient = e => {
    if (createObjectURL) {
      URL.revokeObjectURL(createObjectURL);
    }

    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToFs = async () => {
    const body = new FormData();
    body.append('file', image);

    try {
      const res = await axios.patch('/members/info');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <img src={createObjectURL} alt="" className={classes} />
        <BiImageAdd
          className="absolute bottom-0 right-0 p-2 text-4xl bg-white rounded-full text-[var(--second)]"
          onClick={() => fileInput.current.click()}
        />
        <input
          name="myImage"
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInput}
          onChange={uploadToClient}
        />
        {image && (
          <>
            <button type="submit" onClick={uploadToFs}>
              Click to upload
            </button>
          </>
        )}
      </div>

      {/* <img
        className={classes}
        src={`${
          createObjectURL === undefined || createObjectURL === null
            ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            : createObjectURL
        }`}
        alt="profile"
      />
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
        // onChange={imageHandler}
      /> */}
    </>
  );
}

export default ProfileImg;
