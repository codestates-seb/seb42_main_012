import { ErrorMessage } from '@hookform/error-message';

function GymPostPrice({ register, errors }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">대표가격</p>
      <div>
        <div className="flex items-center mb-2">
          <div className="w-full">
            <input
              {...register('price', {
                required: '내용을 입력해주세요',
              })}
              placeholder="ex) 3개월 150,000원"
              className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
            />
            <ErrorMessage
              errors={errors}
              name="price"
              render={({ message }) => (
                <p className="ml-1 text-sm text-red">{message}</p>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymPostPrice;
