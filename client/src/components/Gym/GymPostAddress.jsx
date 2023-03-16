import TextInput from '../UI/TextInput';

function GymPostAddress() {
  return (
    <div className="mb-8">
      <TextInput
        text="지역정보"
        placeholder="  주소를 입력해주세요"
        classname="w-full h-8 mt-1 border rounded-md"
      />
    </div>
  );
}

export default GymPostAddress;
