import Postcode from '../../UI/Postcode';

function GymPostAddress({
  // register,
  address,
  setAddress,
  setMap,
  patchAddress,
  setPatchMap,
}) {
  return (
    <div className="mb-8">
      <p className="text-sm text-[var(--main)] mb-2">주소</p>
      <Postcode
        // register={register}
        address={address}
        setAddress={setAddress}
        setMap={setMap}
        setPatchMap={setPatchMap}
        patchAddress={patchAddress}
      />
    </div>
  );
}

export default GymPostAddress;
