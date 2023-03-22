package main012.server.community.repository;

import main012.server.community.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    List<Community> findByContentContaining(String keyword);
    List<Community> findAllByTabTabId(Long tabId);
}
