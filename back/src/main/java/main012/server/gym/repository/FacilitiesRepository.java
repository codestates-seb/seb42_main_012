package main012.server.gym.repository;

import main012.server.gym.entity.GymFacility;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FacilitiesRepository extends JpaRepository<GymFacility, Long> {

}