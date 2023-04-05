package main012.server.community.repository;

import main012.server.community.entity.Community;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {

    // 게시글 조회수 업데이트
    @Modifying
    @Query("update Community c set c.viewCnt = c.viewCnt + 1 where c.communityId = :communityId")
    int updateView(@Param("communityId") long communityId);

    // 커뮤니티 전체 게시글 조회(페이지네이션)
    Page<Community> findByCommunityIdLessThanOrderByCommunityIdDesc(Long feedId, Pageable pageable);

    // 키워드로 게시글 조회
    Page<Community> findByContentContainingAndCommunityIdLessThanOrderByCommunityIdDesc(String keyword,Long lastFeedId, Pageable pageable);

    // 탭별 게시글 조회
    Page<Community> findAllByTabTabIdAndCommunityIdLessThanOrderByCommunityIdDesc(Long tabId, Long lastFeedId, Pageable pageable);

    // 마이페이지 내가 쓴 글 조회
    Page<Community> findByMemberIdAndCommunityIdLessThanOrderByCommunityIdDesc(Long memberId, Long id, Pageable pageable);

    Long countByMemberId(Long memberId);

}
