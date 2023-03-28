function GymPostHours({ register, patchHours }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">운영시간</p>
      <textarea
        {...register('businessHours')}
        placeholder="운영시간을 입력해주세요"
        defaultValue={patchHours}
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2 h-48"
      />
    </div>
  );
}

export default GymPostHours;
