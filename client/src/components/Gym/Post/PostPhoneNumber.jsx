import TextInput from '../../UI/Input/TextInput';

function GymPostPhoneNumber() {
  return (
    <div>
      <div className="mb-8">
        <TextInput
          text="연락처"
          placeholder="  연락처를 입력해주세요 (- 제외)"
          classname="w-full h-8 mt-1 border rounded-md"
        />
      </div>
    </div>
  );
}

export default GymPostPhoneNumber;
