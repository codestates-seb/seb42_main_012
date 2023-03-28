import { useState } from 'react';
import api from '../../../utils/api';

function CheckPasswordList() {
  const [originPassword, setOriginPassword] = useState('');

  const handleOriginPasswordChange = e => {
    setOriginPassword(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete('/members', {
        data: {
          isAgreed: true,
          password: originPassword,
        },
      });
      if (response) {
        localStorage.clear();
        alert('회원탈퇴 성공!');
        window.location.replace('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDelete = el => {
    if (window.confirm('정말 탈퇴하시겠어요?🥺')) {
      handleDelete(el);
    }
  };

  return (
    <>
      <label htmlFor="passwordNow" className="font-bold">
        비밀번호 확인
      </label>
      <input
        id="originPassword"
        type="password"
        className="w-full p-2 mt-2 mb-4 border rounded-xl focus:outline-[var(--main)] border-[var(--second)]"
        placeholder="기존 비밀번호를 입력해주세요"
        onChange={handleOriginPasswordChange}
      />

      <button
        className="text-md py-2 text-center font-medium rounded-lg w-full bg-[var(--main)] text-[#fff] mt-6"
        type="button"
        onClick={handleConfirmDelete}
      >
        회원탈퇴
      </button>
    </>
  );
}

export default CheckPasswordList;
