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
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    default MemberResponseDto.Profile memberToProfileDto(Member member, String imagePath) {
        List<String> memberRoleName = member.getRoles().stream()
                .map(role -> role.getName()).collect(Collectors.toList());

        String role = "";
        for (String name : memberRoleName) {
            if (name.equals("ADMIN")) {
                role = "ADMIN";
                break;
            }
            role += name;
        }

        MemberResponseDto.Profile response = MemberResponseDto.Profile.builder()
                .memberId(member.getId())
                .displayName(member.getDisplayName())
                .email(member.getEmail())
                .profileImage(imagePath)
                .role(role)
                .build();

        return response;
    }

    default MemberResponseDto.ModifiedProfile memberToModifiedProfileDto(String displayName, String imagePath) {
        MemberResponseDto.ModifiedProfile response = MemberResponseDto.ModifiedProfile.builder()
                .displayName(displayName)
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
                cc.getCommunity().getCommunityId(),
                cc.getCommunity().getTab().getTabName(),
                cc.getComment(),
                cc.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        return response;
    }

    List<MemberInfoDto.Comments> commentsToCommentInfos(List<CommunityComment> comments);


    default MemberInfoDto.GymBookmarks gymBookmarkToGymBookmarkInfo(GymBookmark gb) {
        Gym g = gb.getGym();

        String gymImage = null;
        if (!g.getGymImages().isEmpty()) {
            gymImage = g.getGymImages().get(0).getImage().getImageName();
        }

        MemberInfoDto.GymBookmarks response = new MemberInfoDto.GymBookmarks(
                g.getId(),
                gymImage,
                g.getGymName()
        );
        return response;
    }

    List<MemberInfoDto.GymBookmarks> gymsToGymInfos(List<GymBookmark> gymBookmarks);

    default MemberInfoDto.GymReviews gymReviewToGymReviewInfo(GymReview gr) {
        MemberInfoDto.GymReviews response = new MemberInfoDto.GymReviews(
                gr.getGym().getId(),
                gr.getGymGrade(),
                gr.getGymComment(),
                gr.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        return response;
    }

    List<MemberInfoDto.GymReviews> gymReviewsToGymReviewInfos(List<GymReview> gymReviews);


}
