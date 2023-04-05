import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function GymMapContainer({ gymAddress }) {
  const { kakao } = window;
  const [map, setMap] = useState({ Ma: 0, La: 0 });

  useEffect(() => {
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(gymAddress, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setMap(coords);
      }
    });
  }, [gymAddress]);

  return (
    <Map center={{ lat: map.Ma, lng: map.La }} className="w-full h-64 mt-1">
      <MapMarker position={{ lat: map.Ma, lng: map.La }} />
    </Map>
  );
}

export default GymMapContainer;
