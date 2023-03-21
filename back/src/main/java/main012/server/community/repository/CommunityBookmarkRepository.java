package main012.server.community.repository;

import main012.server.community.entity.CommunityBookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityBookmarkRepository extends JpaRepository<CommunityBookmark, Long> {
}
