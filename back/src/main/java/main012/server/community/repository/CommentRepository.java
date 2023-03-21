package main012.server.community.repository;

import main012.server.community.entity.CommunityComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<CommunityComment, Long> {
    List<CommunityComment> findAllByCommunityCommunityId(Long communityId);
}
