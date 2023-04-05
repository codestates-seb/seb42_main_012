package main012.server.community.repository;

import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.user.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommunityBookmarkRepository extends JpaRepository<CommunityBookmark, Long> {

    Optional<CommunityBookmark> findByMemberAndCommunity(Member member, Community community);

    Long countByMemberId(Long memberId);

    // 마이페이지 게시글 찜 조회
    Page<CommunityBookmark> findByMemberIdAndIdLessThanOrderByIdDesc(Long memberId, Long Id, Pageable pageable);

    Optional<CommunityBookmark> findByMemberIdAndCommunityCommunityId(Long memberId, Long communityId);
}
