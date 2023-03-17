import BasicButton from '../UI/Button/BasicButton';
import TextInput from '../UI/Input/TextInput';

function SignUpStep2() {
  return (
    <>
      <div className="flex">
        <div className=" w-[50%] border border-[var(--second-border)]" />
        <div className=" w-[50%] border" />
      </div>
      <div>
        <p className="text-base mt-7">
          로그인에 사용할 비밀번호를 입력해주세요.
        </p>
        <TextInput
          placeholder="비밀번호"
          classname="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
        />
        <TextInput
          placeholder="비밀번호 확인"
          classname="border border-[var(--second-border)] outline-[var(--main)] rounded-sm w-full p-2"
        />
        <div className="mt-8">
          <BasicButton page="login" text="가입완료" nav="/login" />
        </div>
      </div>
    </>
  );
}

export default SignUpStep2;
