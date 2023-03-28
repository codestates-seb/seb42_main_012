import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useEffect } from 'react';

function Postcode({ setAddress, setMap, setPatchMap, patchAddress, address }) {
  const { kakao } = window;

  const geocoder = new kakao.maps.services.Geocoder();

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

    geocoder.addressSearch(fullAddress, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setMap(coords);
      }
    });
  };

  useEffect(() => {
    geocoder.addressSearch(patchAddress, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setPatchMap(coords);
      }
    });
  }, []);

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
      <p className="w-full h-8 pt-2 pl-2 mt-2 text-xs border rounded-lg border-grey line-clamp-1">
        {address === ''
          ? patchAddress === undefined
            ? address
            : patchAddress
          : address}
      </p>
      {/* <input
        placeholder="상세주소를 입력해주세요."
        {...register('detailAddress')}
        className="w-full py-2 pl-2 mt-2 text-xs border rounded-lg border-grey line-clamp-1"
      /> */}
    </div>
  );
}

export default Postcode;
