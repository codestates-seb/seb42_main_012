import Postcode from '../../UI/Postcode';

function GymPostAddress({ address, setAddress, register }) {
  return (
    <div className="mb-8">
      <p className="text-sm text-[var(--main)] mb-2">주소</p>
      <Postcode address={address} setAddress={setAddress} register={register} />
    </div>
  );
}

export default GymPostAddress;
