import { useState, useRef, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import useMyStore from '../../state/useMyStore';
import DisplayName from '../UI/DisplayName/DisplayName';
import api from '../../utils/api';

function Profile() {
  const { myElements, setMyElements } = useMyStore();

  useEffect(() => {
    api.get('/members/my').then(res => setMyElements(res.data));
  }, []);

  const fileInput = useRef(null);

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(myElements.profileImage);

  const handleOnChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise(resolve => {
      reader.onload = () => {
        setImage(reader.result || image);
        resolve();
      };
    });
  };

  const [isDeletedProfileImage, setIsDeletedProfileImage] = useState(false);

  const handleDelete = () => {
    if (isDeletedProfileImage) {
      setImage(image);
      setIsDeletedProfileImage(!isDeletedProfileImage);
    } else {
      setImage(myElements.profileImage ? null : myElements.profileImage);
    }
  };

  const [displayName, setDisplayName] = useState(myElements.displayName);

  const onChangeHandler = e => {
    setDisplayName(e.target.value);
  };

  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setDisplayName(myElements.displayName);
    setImage(myElements.profileImage);
    setEdit(!edit);
  };

  const updateHandler = async () => {
    const body = new FormData();
    const blob = new Blob(
      [JSON.stringify({ displayName, isDeletedProfileImage })],
      {
        type: 'application/json',
      },
    );
    body.append('file', imageFile);
    body.append('request', blob);

    try {
      await api
        .patch('/members/info', body, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          if (res.status === 200) {
            setImage(res.data.profileImage);
            setDisplayName(res.data.displayName);
          }
          window.location.replace('/my');
          alert('회원정보 변경완료!');
          console.log(res.data);
        });
    } catch (err) {
      alert('요청에 실패했어요😭');
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mt-4">
        {edit ? (
          <img
            src={
              image === null
                ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                : image
            }
            className="bg-[var(--second)] rounded-full w-40 h-40 object-cover"
            alt="프로필이미지"
          />
        ) : (
          <img
            src={
              myElements.profileImage === null
                ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                : myElements.profileImage
            }
            className="bg-[var(--second)] rounded-full w-40 h-40 object-cover"
            alt="프로필이미지"
          />
        )}
        <input
          name="myImage"
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInput}
          onChange={handleOnChange}
        />
        {edit && (
          <div className="flex flex-row">
            <button
              type="button"
              className="absolute top-0 left-0 p-2 text-xl bg-white rounded-full text-[var(--second)]"
              onClick={handleDelete}
            >
              <IoCloseSharp />
            </button>
            <button
              type="button"
              className="text-xs text-center font-medium rounded-lg w-full border border-[var(--second-border)] mt-4"
              onClick={() => fileInput.current.click()}
            >
              사진 업로드
            </button>
          </div>
        )}
      </div>

      {edit ? (
        <input
          type="text"
          className="border border-[var(--second-border)] outline-[var(--main)] rounded-sm p-2 my-4"
          value={displayName}
          onChange={onChangeHandler}
        />
      ) : (
        <DisplayName displayName={displayName} />
      )}
      <>
        {edit ? (
          <button
            type="submit"
            className="text-xs text-center font-medium rounded-lg p-2 bg-[#000] text-[#fff]"
            onClick={updateHandler}
          >
            프로필 수정완료
          </button>
        ) : (
          <button
            type="submit"
            className="text-xs text-center font-medium rounded-lg p-2 bg-[#000] text-[#fff]"
            onClick={editHandler}
          >
            프로필 수정하기
          </button>
        )}
      </>
    </div>
  );
}

export default Profile;
