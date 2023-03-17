import Gym from '../Gym';

function GymList({ gyms }) {
  return (
    <ul>
      {gyms.map(gym => (
        <Gym
          key={gym.gymId}
          id={gym.gymId}
          gymName={gym.gymName}
          gymImage={gym.gymImage}
          address={gym.address}
          prices={gym.prices}
          facilities={gym.facilities}
        />
      ))}
    </ul>
  );
}

export default GymList;
