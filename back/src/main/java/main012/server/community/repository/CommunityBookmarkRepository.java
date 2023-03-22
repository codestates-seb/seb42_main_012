package main012.server.community.repository;

import main012.server.community.entity.CommunityBookmark;
import main012.server.user.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityBookmarkRepository extends JpaRepository<CommunityBookmark, Long> {

    Page<CommunityBookmark> findByMemberAndIdLessThanOrderByIdDesc(Member member, Long id, Pageable pageable);
}
