import useGeolocation from 'react-hook-geolocation';

function Location() {
  const geolocation = useGeolocation();

  return !geolocation.error ? (
    <ul>
      <li>Latitude: {geolocation.latitude}</li>
      <li>Longitude: {geolocation.longitude}</li>
    </ul>
  ) : (
    <p>No geolocation, sorry.</p>
  );
}

export default Location;
