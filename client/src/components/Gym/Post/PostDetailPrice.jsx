function GymPostDetailPrice({ register, patchDetailPrice }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">상세가격</p>
      <textarea
        {...register('detailPrices')}
        placeholder="상세가격을 입력해주세요"
        defaultValue={patchDetailPrice}
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2 h-48"
      />
    </div>
  );
}

export default GymPostDetailPrice;
