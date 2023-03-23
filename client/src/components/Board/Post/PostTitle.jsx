import TextInput from '../../UI/Input/TextInput';

function BoardPostTitle() {
  return (
    <div className="mt-10">
      <span className="text-2xl font-bold">Title</span>
      <TextInput
        id="title"
        placeholder="제목을 입력해주세요."
        text="제목을 입력해야합니다."
        classname="w-full p-2 mt-2 mb-4 border-2 rounded-xl focus:outline-[var(--main)]"
      />
    </div>
  );
}

export default BoardPostTitle;
