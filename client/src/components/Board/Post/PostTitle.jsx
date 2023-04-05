// import TextInput from '../../UI/Input/TextInput';

function BoardPostTitle({ register }) {
  return (
    <div className="mt-10">
      <span className="text-2xl font-bold">Title</span>
      <input
        id="title"
        placeholder="제목을 입력해주세요."
        className="w-full p-2 mt-2  border-2 rounded-xl focus:outline-[var(--main)]"
        {...register('title', {
          required: '제목을 입력해주세요',
        })}
      />
    </div>
  );
}

export default BoardPostTitle;
