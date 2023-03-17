import { useState } from 'react';
import PasswordNow from './PasswordNow';
import PasswordNowCheck from './PasswordNowCheck';
import Modal from '../../layouts/Modal/Modal';

function CheckPasswordList() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <form>
      <PasswordNow />
      <PasswordNowCheck />
      <button
        className="text-md py-2 text-center font-medium rounded-lg w-full bg-[#FCA43B] text-[#fff] mt-6"
        type="button"
        onClick={openModalHandler}
      >
        회원탈퇴
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </form>
  );
}

export default CheckPasswordList;
