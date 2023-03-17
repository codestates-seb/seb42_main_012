import BasicButton from '../UI/Button/BasicButton';
import TextInput from '../UI/Input/TextInput';

function SignUpStep1() {
  return (
    <>
      <div className="flex">
        <div className=" w-[50%] border" />
        <div className=" w-[50%] border border-[var(--second-border)]" />
      </div>
      <div className="flex flex-col">
        <p className="text-base mt-7">로그인에 사용할 아이디를 입력해주세요.</p>
        <TextInput
          placeholder="아이디 (이메일)"
          classname="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
        />
        <div className="mt-8">
          <BasicButton page="login" text="다음" nav="/signup/step2" />
        </div>
      </div>
    </>
  );
}

export default SignUpStep1;
