package main012.server.gym.repository;

import main012.server.gym.entity.Gym;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Component
@EnableJpaRepositories
public interface GymRepository extends JpaRepository<Gym, Long> {
    Optional<Gym> findByGymName(String gymName);
//    Page<Gym> findAllByOrderByIdDesc(Long feedId,Pageable pageable);
    // 목록별 전체검색
//    Page<Gym> findAllByKindOfGymName(Gym.KindOfGym kindOfGym, Pageable pageable);

    Page<Gym> findByIdLessThanOrderByIdDesc(Long id, Pageable pageable);

    Boolean existsByIdLessThan(Long id);

}
