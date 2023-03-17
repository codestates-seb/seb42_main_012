import TextInput from '../../UI/Input/TextInput';

function PasswordNowCheck() {
  return (
    <>
      <span className="font-bold">기존 비밀번호 확인</span>
      <TextInput
        id="password"
        type="password"
        placeholder="기존 비밀번호를 확인해주세요."
        text="입력된 비밀번호와 다릅니다."
        classname="w-full p-2 mt-2 mb-4 border-2 rounded-xl focus:outline-[#FCA43B]"
      />
    </>
  );
}

export default PasswordNowCheck;
