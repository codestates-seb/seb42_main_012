import Header from '../layouts/Header/Header';
import Main from '../layouts/Main/Main';
import BasicButton from '../UI/Button/BasicButton';
import TextInput from '../UI/Input/TextInput';

function SignUpStep2() {
  return (
    <>
      <Header titleText="SIGN UP" />
      <Main>
        <div className="flex">
          <div className=" w-[50%] border border-[#d9d9d9]" />
          <div className=" w-[50%] border" />
        </div>
        <div>
          <p className="ml-10 text-base mt-7">
            로그인에 사용할 비밀번호를 입력해주세요.
          </p>
          <TextInput
            placeholder="비밀번호"
            classname="border border-[#d9d9d9] rounded-sm w-[80%] h-8 ml-[10%]"
          />
          <TextInput
            placeholder="비밀번호 확인"
            classname="border border-[#d9d9d9] rounded-sm w-[80%] h-8 ml-[10%]"
          />
          <div className="mt-8 ml-[15%]">
            <BasicButton page="login" text="가입완료" />
          </div>
        </div>
      </Main>
    </>
  );
}

export default SignUpStep2;
