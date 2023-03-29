import { useState } from 'react';
import api from '../../../utils/api';

function PasswordList() {
  const [originsPassword, setOriginsPassword] = useState('');

  const handleOriginsPasswordChange = e => {
    setOriginsPassword(e.target.value);
  };

  const [newPasswords, setNewPasswords] = useState('');

  const handleNewPasswordChange = e => {
    setNewPasswords(e.target.value);
  };

  const [checkPassword, setCheckPassword] = useState('');

  const handleCheckPasswordChange = e => {
    setCheckPassword(e.target.value);
  };

  const updateHandler = async () => {
    try {
      await api
        .patch('/members/password', {
          originPassword: originsPassword,
          newPassword: newPasswords,
        })
        .then(res => {
          window.location.replace('/my');
          alert('비밀번호 변경완료!');
          console.log(res);
        });
    } catch (err) {
      alert('요청에 실패했어요😭');
      console.log(err);
    }
  };

  return (
    <>
      <label htmlFor="originsPassword" className="font-bold">
        기존 비밀번호
      </label>
      <input
        id="originsPassword"
        type="password"
        className="w-full p-2 mt-2 mb-4 border rounded-xl focus:outline-[var(--main)] border-[var(--second)]"
        placeholder="기존 비밀번호를 입력해주세요"
        onChange={handleOriginsPasswordChange}
      />

      <label htmlFor="newPasswords" className="font-bold">
        새 비밀번호
      </label>
      <input
        id="newPasswords"
        type="password"
        className="w-full p-2 mt-2 mb-4 border rounded-xl focus:outline-[var(--main)] border-[var(--second)]"
        placeholder="새 비밀번호를 입력해주세요"
        onChange={handleNewPasswordChange}
      />

      <label htmlFor="checkPassword" className="font-bold">
        새 비밀번호 확인
      </label>
      {newPasswords !== checkPassword ? (
        <p className="text-sm text-[var(--main)]">
          입력된 비밀번호와 다릅니다.
        </p>
      ) : null}
      <input
        id="checkPassword"
        type="password"
        className="w-full p-2 mt-2 mb-4 border rounded-xl focus:outline-[var(--main)] border-[var(--second)]"
        placeholder="새로운 비밀번호를 확인해주세요"
        onChange={handleCheckPasswordChange}
      />

      <button
        className="text-md py-2 text-center font-medium rounded-lg w-full bg-[var(--main)] text-[#fff] mt-6"
        type="button"
        onClick={updateHandler}
      >
        비밀번호 변경
      </button>
    </>
  );
}

export default PasswordList;
