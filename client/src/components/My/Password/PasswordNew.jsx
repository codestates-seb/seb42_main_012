import TextInput from '../../UI/Input/TextInput';

function PasswordNew() {
  return (
    <>
      <span className="font-bold">새 비밀번호</span>
      <TextInput
        id="password"
        type="password"
        placeholder="새로운 비밀번호를 입력해주세요."
        text="비밀번호는 8자 이상, 대소문자 구분, 특수기호 1개 이상 사용해주세요. (사용가능한 특수문자 : !@#^*_)"
        classname="w-full p-2 mt-2 mb-4 border-2 rounded-xl focus:outline-[#FCA43B]"
      />
    </>
  );
}

export default PasswordNew;
