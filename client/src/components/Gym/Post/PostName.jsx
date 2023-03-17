import TextInput from '../../UI/Input/TextInput';

function GymPostName() {
  return (
    <div className="mb-8">
      <TextInput
        text="헬스장 이름"
        placeholder="헬스장 이름을 입력해주세요"
        classname="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
      />
    </div>
  );
}

export default GymPostName;
