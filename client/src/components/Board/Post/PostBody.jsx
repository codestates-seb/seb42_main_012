// import TextInput from '../../UI/Input/TextInput';

function BoardPostTitle({ register }) {
  return (
    <div className="mt-10">
      <span className="text-2xl font-bold">Content</span>
      <input
        id="title"
        placeholder="내용을 입력해주세요."
        className="w-full h-56 p-2  mb-4 border-2 rounded-xl focus:outline-[var(--main)]"
        {...register('content', {
          required: '내용을 입력해주세요',
        })}
      />
    </div>
  );
}

export default BoardPostTitle;
