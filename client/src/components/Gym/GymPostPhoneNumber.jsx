import TextInput from '../UI/TextInput';

function GymPostPhoneNumber() {
  return (
    <div>
      <div className="mb-8">
        <TextInput
          text="연락처"
          placeholder="  연락처를 입력해주세요 (- 제외)"
          classname="h-8 mt-1 ml-2 border rounded-md w-[20.4rem]"
        />
      </div>
    </div>
  );
}

export default GymPostPhoneNumber;
