// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import useMyStore from '../../../state/useMyStore';
// import api from '../../../utils/api';

function Modal({ setOpenModal }) {
  const classes =
    'text-md py-2 text-center font-medium rounded-lg px-5 py-1 mt-4 mx-2 border border-[var(--main)] bg-[#fff] text-[var(--main)] active:bg-[var(--main)] active:text-[#fff] text-xs';

  const { myElements } = useMyStore();

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#000] bg-opacity-60 flex justify-center items-center">
      <div className="w-80 p-14 bg-[#fff] text-center">
        <p className="mb-2 font-bold">
          <span className="text-[var(--main)]">{myElements.displayName}</span>
          회원님!
        </p>
        <span>정말 회원 탈퇴를 진행할까요?</span>
        <div>
          <button className={classes} type="submit">
            네
          </button>
          <button className={classes} type="button" onClick={closeModalHandler}>
            아니오
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
