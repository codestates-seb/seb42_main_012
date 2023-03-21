import { BsDot } from 'react-icons/bs';

function GymPostPrice({ register }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">대표가격</p>
      <div>
        <div className="flex items-center mb-2">
          <BsDot />
          <input
            {...register('price1', {
              required: '내용을 입력해주세요',
            })}
            placeholder="ex) 3개월 150,000원"
            className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
          />
        </div>
        <div className="flex items-center">
          <BsDot />
          <input
            {...register('price2', {
              required: '내용을 입력해주세요',
            })}
            placeholder="ex) 6개월 350,000원"
            className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default GymPostPrice;
