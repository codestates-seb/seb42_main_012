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
            gymImageUrl={gym.gymImageUrl}
            address={gym.address}
            price={gym.price}
            facilities={gym.facilities}
            businessHours={gym.businessHours}
            bookmarked={gym.bookmarked}
          />
        ))}
    </ul>
  );
}

export default GymList;
