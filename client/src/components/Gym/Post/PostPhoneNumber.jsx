import { ErrorMessage } from '@hookform/error-message';

function GymPostPhoneNumber({ register, errors }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">연락처</p>
      <input
        {...register('phoneNumber', {
          required: '내용을 입력해주세요',
        })}
        placeholder="연락처를 입력해주세요 (- 포함)"
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
      />
      <ErrorMessage
        errors={errors}
        name="phoneNumber"
        render={({ message }) => (
          <p className="ml-1 text-sm text-red">{message}</p>
        )}
      />
    </div>
  );
}

export default GymPostPhoneNumber;
