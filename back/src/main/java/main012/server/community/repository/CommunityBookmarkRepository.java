package main012.server.community.repository;

import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.user.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommunityBookmarkRepository extends JpaRepository<CommunityBookmark, Long> {
    Optional<CommunityBookmark> findByMemberAndCommunity(Member member, Community community);
}
