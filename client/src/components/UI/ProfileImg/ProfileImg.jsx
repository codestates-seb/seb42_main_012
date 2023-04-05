import { useState, useRef } from 'react';
import axios from 'axios';
import { BiImageAdd } from 'react-icons/bi';

function ProfileImg({ page }) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const fileInput = useRef(null);

  let classes = 'bg-[var(--second)] rounded-full ';

  if (page === 'my') {
    classes += 'w-20 h-20 object-cover';
  } else if (page === 'board') {
    classes += 'w-10 h-10 object-cover';
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
      await res.json();
      alert('이미지 변경완료!');
    } catch (err) {
      alert('요청에 실패했어요😭');
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <img
          src={`${
            createObjectURL === undefined || createObjectURL === null
              ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              : createObjectURL
          }`}
          alt=""
          className={classes}
        />
        <input
          name="myImage"
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInput}
          onChange={uploadToClient}
        />
        <button
          type="submit"
          onClick={uploadToFs}
          className="absolute bottom-0 right-0 p-2 text-xl bg-white rounded-full text-[var(--second)]"
        >
          <BiImageAdd onClick={() => fileInput.current.click()} />
        </button>
      </div>
    </>
  );
}

export default ProfileImg;
