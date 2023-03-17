import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import BasicButton from '../UI/Button/BasicButton';
import TextInput from '../UI/Input/TextInput';

function Login() {
  return (
    <div>
      <div>
        <TextInput
          placeholder="아이디 (이메일)"
          classname="border border-[#d9d9d9] mt-10 rounded-sm w-[80%] h-8 ml-[10%]"
        />
        <TextInput
          placeholder="비밀번호"
          classname="border border-[#d9d9d9] rounded-sm w-[80%] h-8 ml-[10%]"
        />
      </div>
      <div className="mt-8 ml-[15%]">
        <BasicButton page="login" text="로그인" />
      </div>
      <p className="ml-[30%] mt-10 font-bold">SNS 계정으로 로그인</p>
      <div className="flex">
        <FcGoogle className="w-10 h-10 ml-[30%] mt-10 mr-10" />
        <RiKakaoTalkFill className=" w-10 h-10 ml-[40]% mt-10 bg-[#f9e000]" />
      </div>
      <div className="mt-10 ml-12">
        <BasicButton page="signup" text="회원가입" nav="/signup/step1" />
      </div>
    </div>
  );
}

export default Login;
