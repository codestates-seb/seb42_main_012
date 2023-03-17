import TextInput from '../../UI/Input/TextInput';

function PasswordNow() {
  return (
    <>
      <span className="font-bold">기존 비밀번호</span>
      <TextInput
        id="password"
        type="password"
        placeholder="기존 비밀번호를 입력해주세요."
        text="기존 비밀번호와 다릅니다."
        classname="w-full p-2 mt-2 mb-4 border-2 rounded-xl focus:outline-[#FCA43B]"
      />
    </>
  );
}

export default PasswordNow;
