import { Link } from 'react-router-dom';
// import axios from 'axios';

function GymNameButton({ gymName, gymId }) {
  //   const test = () => {
  //     axios
  //       .get(
  //         'http://ec2-13-124-61-156.ap-northeast-2.compute.amazonaws.com:8080/',
  //       )
  //       .then(res => console.log(res));
  //   };

  return (
    <>
      <Link to={`/gyms/${gymId}`}>
        <button type="button">{gymName}</button>
      </Link>
    </>
  );
}

export default GymNameButton;
