import { ErrorMessage } from '@hookform/error-message';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';

function Postcode({ register, errors }) {
  const [address, setAddress] = useState('');

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
      <input
        value={address}
        placeholder="주소를 입력해주세요."
        {...register('address1', {
          required: '내용을 입력해주세요',
        })}
        className="w-full py-2 pl-2 mt-2 text-xs border rounded-lg border-grey line-clamp-1"
      />
      <input
        placeholder="상세주소를 입력해주세요."
        {...register('address2')}
        className="w-full py-2 pl-2 mt-2 text-xs border rounded-lg border-grey line-clamp-1"
      />
      <ErrorMessage
        errors={errors}
        name="address1"
        render={({ message }) => (
          <p className="ml-1 text-sm text-red">{message}</p>
        )}
      />
    </div>
  );
}

export default Postcode;
