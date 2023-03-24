import { ErrorMessage } from '@hookform/error-message';

function GymPostHours({ register, errors }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">운영시간</p>
      <textarea
        {...register('businessHours', {
          required: '내용을 입력해주세요',
        })}
        placeholder="운영시간을 입력해주세요"
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2 h-48"
      />
      <ErrorMessage
        errors={errors}
        name="businessHours"
        render={({ message }) => (
          <p className="ml-1 text-sm text-red">{message}</p>
        )}
      />
    </div>
  );
}

export default GymPostHours;
