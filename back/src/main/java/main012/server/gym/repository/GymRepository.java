package main012.server.gym.repository;

import main012.server.gym.entity.Gym;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GymRepository extends JpaRepository <Gym, Long> {
    Optional<Gym> findByGymName(String gymName);
    
}
