package main012.server.community.repository;

import main012.server.community.entity.Community;
import main012.server.user.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {


    List<Community> findByContentContaining(String keyword);
    List<Community> findAllByTabTabId(Long tabId);

    // 마이페이지 내가 쓴 글 조회
    Page<Community> findByMemberAndCommunityIdLessThanOrderByCommunityIdDesc(Member member, Long id, Pageable pageable);
}
