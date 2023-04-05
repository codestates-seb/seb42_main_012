// import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../../components/UI/Button/BasicButton';
import api from '../../utils/api';
// import TextInput from '../UI/Input/TextInput';

function OwnerSignUpPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [firstPassword, setFirstPassword] = useState('');
  const [lastPassword, setLastPassword] = useState('');
  // const [msg, setMsg] = useState('');

  function handlerfirst(e) {
    setFirstPassword(e.target.value);
  }

  function handlerLast(e) {
    setLastPassword(e.target.value);
  }

  const onSubmit = data => {
    api
      .post(`/members/owners`, {
        email: data.email,
        displayName: data.displayName,
        password: data.password,
        businessNumber: data.businessNumber,
      })
      .then(res => {
        if (res.status === 201) {
          navigate('/login');
        }
      })
      .catch(err => {
        if (err.response.status === 400) {
          setErrorMessage('회원가입에 실패했습니다.');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="w-full border " />
      </div>
      <div className="flex flex-col">
        <p className="text-base mt-7">닉네임을 입력해주세요.</p>
        <input
          {...register('displayName', {
            required: '내용을 입력해주세요',
          })}
          placeholder="닉네임"
          className="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
        />
        <p className="text-base mt-7">아이디를 입력해주세요.</p>
        <input
          {...register('email', {
            required: '내용을 입력해주세요',
          })}
          placeholder="아이디 (이메일)"
          className="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
          type="email"
        />
        <p className="text-base mt-7">사업자 번호를 입력해주세요.</p>
        <input
          {...register('businessNumber', {
            required: '내용을 입력해주세요',
          })}
          placeholder="사업자 번호"
          className="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
        />

        <div>
          <p className="text-base mt-7">비밀번호를 입력해주세요.</p>
          <input
            {...register('password', {
              required: '내용을 입력해주세요',
            })}
            placeholder="비밀번호"
            className="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
            onChange={handlerfirst}
            value={firstPassword}
            type="password"
          />
          <input
            placeholder="비밀번호 확인"
            className="mt-4 border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
            onChange={handlerLast}
            value={lastPassword}
            type="password"
          />
          {firstPassword !== lastPassword ? (
            <p className="text-sm text-orange">비밀번호가 일치하지 않습니다.</p>
          ) : (
            ''
          )}

          <div className="mt-8">
            {errorMessage}

            <BasicButton page="login" text="가입완료" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default OwnerSignUpPage;
