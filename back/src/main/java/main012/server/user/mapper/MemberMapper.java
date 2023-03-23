package main012.server.user.mapper;

import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.entity.CommunityComment;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymBookmark;
import main012.server.gym.entity.GymReview;
import main012.server.user.dto.MemberInfoDto;
import main012.server.user.dto.MemberResponseDto;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.time.format.DateTimeFormatter;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    default MemberResponseDto.Profile memberToProfileDto(Member member, String imagePath) {
        MemberResponseDto.Profile response = MemberResponseDto.Profile.builder()
                .displayName(member.getDisplayName())
                .profileImage(imagePath)
                .build();

        return response;
    }

    default MemberInfoDto.Communities communityToCommunityInfo(Community community) {
        MemberInfoDto.Communities response = MemberInfoDto.Communities.builder()
                .boardId(community.getCommunityId())
                .boardTab(community.getTab().getTabName())
                .boardTitle(community.getTitle())
                .boardCreatedAt(community.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
        return response;
    }

    List<MemberInfoDto.Communities> communityToCommunityInfos(List<Community> communities);


    default MemberInfoDto.Communities communityBookmarkToCommunityInfo(CommunityBookmark cb) {
        Community c = cb.getCommunity();

        MemberInfoDto.Communities response = MemberInfoDto.Communities.builder()
                .boardId(c.getCommunityId())
                .boardTab(c.getTab().getTabName())
                .boardTitle(c.getTitle())
                .boardCreatedAt(c.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
        return response;
    }

    List<MemberInfoDto.Communities> communityBookmarksToCommunityInfos(List<CommunityBookmark> communities);

    default MemberInfoDto.Comments commentToCommentInfo(CommunityComment cc) {
        MemberInfoDto.Comments response = new MemberInfoDto.Comments(
                cc.getCommunity().getTab().getTabName(),
                cc.getComment(),
                cc.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        return response;
    }

    List<MemberInfoDto.Comments> commentsToCommentInfos(List<CommunityComment> comments);


    default MemberInfoDto.Gyms gymBookmarkToGymBookmarkInfo(GymBookmark gb) {
        Gym g = gb.getGym();
        MemberInfoDto.Gyms response = new MemberInfoDto.Gyms(
                g.getId(),
                g.getGymName()
        );
        return response;
    }

    List<MemberInfoDto.Gyms> gymsToGymInfos(List<GymBookmark> gymBookmarks);

    default MemberInfoDto.GymReviews gymReviewToGymReviewInfo(GymReview gr) {
        MemberInfoDto.GymReviews response = new MemberInfoDto.GymReviews(
                gr.getGym().getId(),
                gr.getGymComment(),
                gr.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        return response;
    }

    List<MemberInfoDto.GymReviews> gymReviewsToGymReviewInfos(List<GymReview> gymReviews);


}
