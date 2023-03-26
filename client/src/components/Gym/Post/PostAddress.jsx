import Postcode from '../../UI/Postcode';

function GymPostAddress({ register, address, setAddress, setMap }) {
  return (
    <div className="mb-8">
      <p className="text-sm text-[var(--main)] mb-2">주소</p>
      <Postcode
        register={register}
        address={address}
        setAddress={setAddress}
        setMap={setMap}
      />
    </div>
  );
}

export default GymPostAddress;
