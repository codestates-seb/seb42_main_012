package main012.server.gym.repository;

import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymBookmark;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymBookmarkRepository extends JpaRepository<GymBookmark, Long> {

    Long countByMemberId(Long memberId);

    // 마이페이지 헬스장 찜 조회
    Page<GymBookmark> findByMemberIdAndIdLessThanOrderByIdDesc(Long memberId, Long id, Pageable pageable);
}
