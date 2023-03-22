package main012.server.community.repository;

import main012.server.community.entity.CommunityComment;
import main012.server.user.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<CommunityComment, Long> {
    List<CommunityComment> findAllByCommunityCommunityId(Long communityId);

    // 마이페이지 내가 쓴 댓글 조회
    Page<CommunityComment> findByMemberAndCommentIdLessThanOrderByCommentIdDesc(Member member, Long id, Pageable pageable);
}
