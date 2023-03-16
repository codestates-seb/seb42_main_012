import TextInput from '../UI/TextInput';

function GymPostName() {
  return (
    <div className="mb-8">
      <TextInput
        text="헬스장 이름"
        placeholder="  헬스장 이름을 입력해주세요"
        classname="w-full h-8 mt-1 border rounded-md"
      />
    </div>
  );
}

export default GymPostName;
