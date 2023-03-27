package main012.server.image.repository;

import main012.server.image.entity.CommunityImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityImageRepo extends JpaRepository<CommunityImage, Long> {

    // 커뮤니티 아이디로 검색
    List<CommunityImage> findByCommunityCommunityId(Long communityId);

    //이미지 아이디로 검색
    List<CommunityImage> findByImageId(Long imageId);
}
