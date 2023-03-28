function GymPostPhoneNumber({ register, patchPhoneNumber }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">연락처</p>
      <input
        {...register('phoneNumber')}
        placeholder="연락처를 입력해주세요 (- 포함)"
        defaultValue={patchPhoneNumber}
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
      />
    </div>
  );
}

export default GymPostPhoneNumber;
