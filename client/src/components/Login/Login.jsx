import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import BasicButton from '../UI/Button/BasicButton';
import TextInput from '../UI/Input/TextInput';

function Login() {
  return (
    <div className="flex flex-col">
      <div>
        <TextInput
          placeholder="아이디 (이메일)"
          classname="border border-[var(--second-border)] outline-[var(--main)] mt-10 rounded-sm w-full p-2"
        />
        <TextInput
          placeholder="비밀번호"
          classname="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
        />
      </div>
      <div className="mt-8">
        <BasicButton page="login" text="로그인" nav="/" />
      </div>
      <p className="mt-10 font-bold text-center">SNS 계정으로 로그인</p>
      <div className="flex items-center justify-center mt-10">
        <FcGoogle className="w-10 h-10 mr-10" />
        <RiKakaoTalkFill className="w-10 h-10 " />
      </div>
      <div className="mt-10">
        <BasicButton page="signup" text="회원가입" nav="/signup/step1" />
      </div>
    </div>
  );
}

export default Login;
