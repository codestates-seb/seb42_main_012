function GymPostPrice({ register, patchPrice }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">대표가격</p>
      <div>
        <div className="flex items-center mb-2">
          <div className="w-full">
            <input
              {...register('price')}
              placeholder="ex) 3개월 150,000원"
              defaultValue={patchPrice}
              className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymPostPrice;
