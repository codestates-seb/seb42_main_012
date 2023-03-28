package main012.server.gym.repository;

import main012.server.image.entity.GymImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GymImageRepo extends JpaRepository<GymImage, Long> {
    List<GymImage> findByImageId(Long imageId);
}
