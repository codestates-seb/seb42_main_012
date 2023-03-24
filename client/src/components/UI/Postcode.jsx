import { useDaumPostcodePopup } from 'react-daum-postcode';

function Postcode({ address, setAddress, register }) {
  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="py-1 border rounded-lg border-grey hover:bg-grey text-[var(--second)] w-20 text-sm"
      >
        주소검색
      </button>
      <p className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2 h-10 text-sm line-clamp-1">
        {address}
      </p>
      <input
        className="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
        {...register('detailAddress')}
        placeholder="상세주소를 입력해주세요."
      />
    </div>
  );
}

export default Postcode;
