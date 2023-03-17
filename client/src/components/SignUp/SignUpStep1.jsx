import BasicButton from '../UI/Button/BasicButton';
import TextInput from '../UI/Input/TextInput';

function SignUpStep1() {
  return (
    <>
      <div className="flex">
        <div className=" w-[50%] border" />
        <div className=" w-[50%] border border-[#d9d9d9]" />
      </div>
      <div>
        <p className="ml-10 text-base mt-7">
          로그인에 사용할 아이디를 입력해주세요.
        </p>
        <TextInput
          placeholder="아이디 (이메일)"
          classname="border border-[#d9d9d9] rounded-sm w-[80%] h-8 ml-[10%]"
        />
        <div className="mt-8 ml-[15%]">
          <BasicButton page="login" text="다음" nav="/signup/step2" />
        </div>
      </div>
    </>
  );
}

export default SignUpStep1;
