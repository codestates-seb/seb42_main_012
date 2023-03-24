package main012.server.community.repository;

import main012.server.community.entity.CommunityComment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<CommunityComment, Long> {

    // 커뮤니티 게시글 댓글 조회(페이지네이션)
    Page<CommunityComment> findByCommunityCommunityIdAndCommentIdLessThanOrderByCommentIdDesc(Long communityId, Long lastFeedId, Pageable pageable);

    // 마이페이지 내가 쓴 댓글 조회
    Page<CommunityComment> findByMemberIdAndCommentIdLessThanOrderByCommentIdDesc(Long memberId, Long id, Pageable pageable);

    Long countByMemberId(Long memberId);
}
