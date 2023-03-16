import TextInput from '../UI/TextInput';

function GymPostName() {
  return (
    <div className="mb-8">
      <TextInput
        text="헬스장 이름"
        placeholder="  헬스장 이름을 입력해주세요"
        classname="h-8 mt-1 ml-2 border rounded-md w-[20.4rem]"
      />
    </div>
  );
}

export default GymPostName;
