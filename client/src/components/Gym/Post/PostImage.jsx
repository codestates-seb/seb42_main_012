import { useRef } from 'react';
import { BsImage } from 'react-icons/bs';
// import { GrFormClose } from 'react-icons/gr';

function GymPostImage() {
  // 사진 업로드 버튼 이벤트 핸들러
  const imageInput = useRef();
  const imageInputHandler = () => {
    imageInput.current.click();
  };

  return (
    <>
      <div className="mb-8">
        <p className="m-2 text-sm text-[var(--main)]">헬스장 대표이미지</p>
        <BsImage
          className="bg-[var(--second-bg)] p-8 text-8xl text-[var(--second)]"
          onClick={imageInputHandler}
        />
        <input
          type="file"
          ref={imageInput}
          multiple
          accept="image/jpg, image/jpeg, image/png"
          className="hidden"
        />
      </div>
    </>
  );
}

export default GymPostImage;
