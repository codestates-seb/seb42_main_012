import { useDaumPostcodePopup } from 'react-daum-postcode';

function Postcode({ address, setAddress }) {
  const open = useDaumPostcodePopup(
    't1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
  );

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
      <p className="py-2 pl-2 mt-2 text-xs border rounded-lg border-grey line-clamp-1">
        {address}
      </p>
    </div>
  );
}

export default Postcode;
