import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// import { FcGoogle } from 'react-icons/fc';
// import { RiKakaoTalkFill } from 'react-icons/ri';
import BasicButton from '../UI/Button/BasicButton';
// import TextInput from '../UI/Input/TextInput';

import api from '../../utils/api';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    // defaultValues: {
    //   email: 'testMember@email.com',
    //   password: 'secret1111@',
    // },
  });

  const onSubmit = data => {
    api
      .post(
        '/auth/login',
        {
          email: data.email,
          password: data.password,
        },
        // { withCredentials: true },
      )

      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('isLoggedIn', true);
          alert('로그인 성공!');
          navigate('/');
        }
      })
      .catch(err => {
        console.log(err);
        alert('로그인 실패...😭');
        window.location.replace('/');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div>
          <input
            placeholder="아이디(이메일)"
            className="border border-[var(--second-border)] outline-[var(--main)] mt-10 rounded-sm w-full p-2"
            {...register('email', {
              required: '내용을 입력해주세요',
            })}
          />
          <input
            placeholder="비밀번호"
            className="mt-2 border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
            type="password"
            {...register('password', {
              required: '내용을 입력해주세요',
            })}
          />
        </div>
        <div className="mt-8">
          <BasicButton page="login" text="로그인" />
        </div>
        {/* <p className="mt-10 font-bold text-center">SNS 계정으로 로그인</p>
        <div className="flex items-center justify-center mt-10">
          <FcGoogle className="w-10 h-10 mr-10" />
          <RiKakaoTalkFill className="w-10 h-10 " />
        </div> */}

        <div className="mt-10">
          <BasicButton page="signup" text="회원가입" nav="/signup" />
          <div className="mt-4">
            <BasicButton
              className="mt-1"
              page="signup"
              text="사업주 회원가입"
              nav="/signup/owner"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
