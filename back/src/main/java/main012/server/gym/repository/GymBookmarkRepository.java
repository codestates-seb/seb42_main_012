package main012.server.gym.repository;

import main012.server.gym.entity.GymBookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymBookmarkRepository extends JpaRepository<GymBookmark, Long> {

    Long countByMemberId(Long memberId);

}
