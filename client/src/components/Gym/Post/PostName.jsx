import { ErrorMessage } from '@hookform/error-message';

function GymPostName({ register, errors }) {
  return (
    <div className="mb-8">
      <p className="text-sm text-[var(--main)]">헬스장 이름</p>
      <input
        {...register('gymName', {
          required: '내용을 입력해주세요',
        })}
        placeholder="헬스장 이름을 입력해주세요"
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
      />
      <ErrorMessage
        errors={errors}
        name="gymName"
        render={({ message }) => (
          <p className="ml-1 text-sm text-red">{message}</p>
        )}
      />
    </div>
  );
}

export default GymPostName;
