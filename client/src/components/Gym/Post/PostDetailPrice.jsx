import { ErrorMessage } from '@hookform/error-message';

function GymPostDetailPrice({ register, errors }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">상세가격</p>
      <textarea
        {...register('detailPrice', {
          required: '내용을 입력하세요.',
        })}
        placeholder="상세가격을 입력해주세요"
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2 h-48"
      />
      <ErrorMessage
        errors={errors}
        name="detailPrice"
        render={({ message }) => (
          <p className="ml-1 text-sm text-red">{message}</p>
        )}
      />
    </div>
  );
}

export default GymPostDetailPrice;
