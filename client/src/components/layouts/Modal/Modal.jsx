import BasicButton from '../../UI/Button/BasicButton';

function Modal({ setOpenModal }) {
  const classes =
    'text-md py-2 text-center font-medium rounded-lg px-5 py-1 mt-4 mx-2 border border-[#FCA43B] bg-[#fff] text-[#FCA43B] active:bg-[#FCA43B] active:text-[#fff] text-xs';

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#000] bg-opacity-[60%] flex justify-center items-center">
      <div className="w-80 p-14 bg-[#fff] text-center">
        {/* displayName 동적으로 변환 */}
        <p className="mb-2 font-bold">
          <span className="text-[#FCA43B]">김코딩</span>회원님!
        </p>
        <span>정말 회원 탈퇴를 진행할까요?</span>
        <div>
          <BasicButton page="modal" text="네" nav="/login" />
          <button className={classes} type="button" onClick={closeModalHandler}>
            아니오
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
