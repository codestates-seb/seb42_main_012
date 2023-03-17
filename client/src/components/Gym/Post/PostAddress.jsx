import TextInput from '../../UI/Input/TextInput';

function GymPostAddress() {
  return (
    <div className="mb-8">
      <TextInput
        text="지역정보"
        placeholder="주소를 입력해주세요"
        classname="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
      />
    </div>
  );
}

export default GymPostAddress;
