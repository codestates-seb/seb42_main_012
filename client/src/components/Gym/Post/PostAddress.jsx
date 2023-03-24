import Postcode from '../../UI/Postcode';

function GymPostAddress({ register, errors }) {
  return (
    <div className="mb-8">
      <p className="text-sm text-[var(--main)] mb-2">주소</p>
      <Postcode register={register} errors={errors} />
    </div>
  );
}

export default GymPostAddress;
