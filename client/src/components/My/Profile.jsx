import { useState, useRef } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai';
import useStore from '../../state/useStore';
import DisplayName from '../UI/DisplayName/DisplayName';
import api from '../../utils/api';

function Profile() {
  const { myElements } = useStore();
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(
    myElements.profileImage,
  );
  const [edit, setEdit] = useState(false);
  const [displayName, setDisplayName] = useState(myElements.displayName);

  const editHandler = () => {
    setEdit(!edit);
  };
  const onChangeHandler = e => {
    setDisplayName(e.target.value);
  };

  const fileInput = useRef(null);

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

  const updateHandler = async e => {
    e.preventDefault();
    const body = new FormData();
    body.append('file', image);
    body.append('request', { displayName });

    try {
      const res = await api.patch('/members/info', body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('회원정보 변경완료!');
      console.log(res);
    } catch (err) {
      alert('요청에 실패했어요😭');
      console.log(err);
    }
  };

  return (
    <div className="flex items-center">
      {console.log(myElements)}
      <div className="relative">
        <img
          src={`${
            createObjectURL === undefined || createObjectURL === null
              ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              : createObjectURL
          }`}
          className="bg-[var(--second)] rounded-full w-20 h-20 object-cover"
          alt="프로필이미지"
        />
        <input
          name="myImage"
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInput}
          onChange={uploadToClient}
        />
        {edit && (
          <button
            type="submit"
            className="absolute bottom-0 right-0 p-2 text-xl bg-white rounded-full text-[var(--second)]"
          >
            <BiImageAdd onClick={() => fileInput.current.click()} />
          </button>
        )}
      </div>

      {edit ? (
        <input
          type="text"
          className="border border-[var(--second-border)] outline-[var(--main)] mx-3 rounded-sm p-2"
          value={displayName}
          onChange={onChangeHandler}
        />
      ) : (
        <>
          <DisplayName displayName={myElements.displayName} />
        </>
      )}
      <span className="ml-1 text-xl">회원님</span>
      <button type="button" className="ml-2 text-xl">
        {edit ? (
          <AiFillCheckCircle onClick={updateHandler} />
        ) : (
          <AiFillEdit onClick={editHandler} />
        )}
      </button>
    </div>
  );
}

export default Profile;
