package main012.server.gym.repository;

import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymBookmark;
import main012.server.user.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GymBookmarkRepository extends JpaRepository<GymBookmark, Long> {
    Page<GymBookmark> findByMemberAndIdLessThanOrderByIdDesc(Member member, Long id, Pageable pageable);
}
