package main012.server.image.repository;

import main012.server.image.entity.CommunityImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityImageRepo extends JpaRepository<CommunityImage, Long> {
    List<CommunityImage> findByCommunityCommunityId(Long communityId);
}
