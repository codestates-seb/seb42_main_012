import TextInput from '../UI/TextInput';

function BoardPostTitle() {
  return (
    <div className="w-full h-10 mx-4 mt-6 text-3xl">
      <TextInput placeholder="제목을 입력하세요." />
    </div>
  );
}

export default BoardPostTitle;
