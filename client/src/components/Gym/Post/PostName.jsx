function GymPostName({ register }) {
  return (
    <div className="mb-8">
      <span>헬스장 이름</span>
      <input
        {...register('gymName', {
          required: '내용을 입력해주세요',
        })}
        placeholder="헬스장 이름을 입력해주세요"
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
      />
    </div>
  );
}

export default GymPostName;
