import Gym from '../Gym';

function GymList({ gyms }) {
  return (
    <ul>
      {gyms &&
        gyms.map(gym => (
          <Gym
            key={gym.gymId}
            gymId={gym.gymId}
            gymName={gym.gymName}
            gymImages={gym.gymImages}
            address={gym.address}
            price={gym.price}
            facilityNames={gym.facilityNames}
            businessHours={gym.businessHours}
          />
        ))}
    </ul>
  );
}

export default GymList;
