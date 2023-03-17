import TextInput from '../../UI/Input/TextInput';

function GymPostPhoneNumber() {
  return (
    <div>
      <div className="mb-8">
        <TextInput
          text="연락처"
          placeholder="연락처를 입력해주세요 (- 제외)"
          classname="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
        />
      </div>
    </div>
  );
}

export default GymPostPhoneNumber;
