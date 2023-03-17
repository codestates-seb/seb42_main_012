import { Link } from 'react-router-dom';

function GymNameButton({ gymName, gymId }) {
  return (
    <>
      <Link to={`/gyms/${gymId}`}>
        <button type="button">{gymName}</button>
      </Link>
    </>
  );
}

export default GymNameButton;
