import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../../UI/Button/BasicButton';
import api from '../../../utils/api';

function PasswordList() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState('');
  const [originPassword, setOriginPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const handleOriginPasswordChange = e => {
    setOriginPassword(e.target.value);
    console.log(originPassword);
  };

  const handleNewPasswordChange = e => {
    setNewPassword(e.target.value);
    console.log(newPassword);
  };

  const handleCheckPasswordChange = e => {
    setCheckPassword(e.target.value);
    console.log(checkPassword);
  };

  const onSubmit = async data => {
    await api
      .patch('/members/password', {
        originPassword: data.originPassword,
        newPassword: data.newPassword,
      })
      .then(res => {
        if (res.status === 200) {
          navigate('/my', { replace: true });
          alert('비밀번호 변경 성공!');
          console.log(res.data);
        }
      })
      .catch(err => {
        if (err) {
          setErrorMessages('비밀번호 변경 실패..😭');
          alert(errorMessages);
          console.log(err.response.data);
        }
      });
  };

  return (
    <>
      <label htmlFor="passwordNow" className="font-bold">
        기존 비밀번호
      </label>
      <input
        id="originPassword"
        type="password"
        className="w-full p-2 mt-2 mb-4 border rounded-xl focus:outline-[var(--main)] border-[var(--second)]"
        placeholder="기존 비밀번호를 입력해주세요"
        value={originPassword}
        onChange={handleOriginPasswordChange}
      />
      <label htmlFor="passwordNew" className="font-bold">
        새 비밀번호
      </label>
      <input
        id="passwordNew"
        type="password"
        placeholder="새 비밀번호를 입력해주세요."
        className="w-full p-2 mt-2 mb-4 border rounded-xl focus:outline-[var(--main)] border-[var(--second)]"
        value={newPassword}
        onChange={handleNewPasswordChange}
      />
      <label htmlFor="passwordCheck" className="font-bold">
        새 비밀번호 확인
      </label>
      {newPassword !== checkPassword ? (
        <p className="text-sm text-[var(--main)]">
          입력된 비밀번호와 다릅니다.
        </p>
      ) : null}
      <input
        id="passwordCheck"
        type="password"
        placeholder="새로운 비밀번호를 확인해주세요."
        className="w-full p-2 mt-2 mb-4 border rounded-xl focus:outline-[var(--main)] border-[var(--second)]"
        value={checkPassword}
        onChange={handleCheckPasswordChange}
      />
      <BasicButton
        nav="/my"
        page="my_password"
        text="비밀번호 변경"
        onClick={onSubmit}
      />
    </>
  );
}

export default PasswordList;
