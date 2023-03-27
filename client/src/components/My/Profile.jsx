import { useState, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import useStore from '../../state/useStore';
import DisplayName from '../UI/DisplayName/DisplayName';
import api from '../../utils/api';

function Profile() {
  const { myElements } = useStore();
  const [image, setImage] = useState([]);
  const [createObjectURL, setCreateObjectURL] = useState(
    myElements.profileImage,
  );
  const [edit, setEdit] = useState(false);
  const [displayName, setDisplayName] = useState(myElements.displayName);
  const [isDeletedProfileImage, setIsDeletedProfileImage] = useState(false);

  const editHandler = () => {
    setEdit(!edit);
  };

  const fileInput = useRef();

  const uploadToClient = async e => {
    if (createObjectURL) {
      URL.revokeObjectURL(createObjectURL);
    }

    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const handleDelete = () => {
    // displayName 은 변경사항 없어도 무조건 넣어서 보내주세요
    // file도 key는 꼭 있어야 합니다.
    // file 값 있으면, isDeletedProfileImage 상관없이 새로운 프사로 저장하고 return
    // file 값 없고, isDeletedProfileImage = true, 기존 프사 있으면 -> 기존 프사 삭제
    // file 값 없고, isDeletedProfileImage = false, 기존 프사 유지
    if (
      myElements.profileImage === null ||
      myElements.profileImage === undefined
    ) {
      setIsDeletedProfileImage(!isDeletedProfileImage);
    } else {
      setIsDeletedProfileImage(false);
    }
  };

  const onChangeHandler = e => {
    setDisplayName(e.target.value);
  };

  const updateHandler = async () => {
    const body = new FormData();
    const blob = new Blob(
      [JSON.stringify(displayName), JSON.stringify(isDeletedProfileImage)],
      {
        type: 'application/json',
      },
    );
    body.append('file', image);
    body.append('request', blob);

    try {
      await api
        .patch('/members/info', body, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          if (res.status === 200) {
            window.location.reload();
            alert('회원정보 변경완료!');
          }
        });
    } catch (err) {
      alert('요청에 실패했어요😭');
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mt-4">
        <img
          src={`${
            myElements.profileImage === undefined ||
            myElements.profileImage === null
              ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              : myElements.profileImage
          }`}
          className="bg-[var(--second)] rounded-full w-40 h-40 object-cover"
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
        <DisplayName
          displayName={
            myElements.displayName === null ||
            myElements.displayName === undefined ||
            myElements.displayName === ''
              ? '닉네임을 설정해주세요'
              : myElements.displayName
          }
        />
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
            type="button"
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
