package main012.server.user.mapper;

import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.entity.CommunityComment;
import main012.server.user.dto.MemberInfoDto;
import main012.server.user.dto.MemberResponseDto;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.time.format.DateTimeFormatter;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    default MemberResponseDto.MainPage memberToMainPageDto(Member member, String profileImageUrl){
        MemberResponseDto.MainPage response = MemberResponseDto.MainPage.builder()
                .profileImage(profileImageUrl)
                .displayName(member.getDisplayName())
                .boardPostCnt(member.getBoardPostCnt())
                .boardCommentCnt(member.getBoardCommentCnt())
                .gymReviewCnt(member.getGymReviewCnt())
                .boardBookmarkCnt(member.getBoardBookmarkCnt())
                .gymBookmarkCnt(member.getGymBookmarkCnt())
                .build();

        return response;
    };

    default MemberResponseDto.Profile memberToProfileDto(Member member) {
        MemberResponseDto.Profile response = MemberResponseDto.Profile.builder()
                .displayName(member.getDisplayName())
                .profileImage(member.getImage().getImagePath())
                .build();

        return response;
    }

    default MemberInfoDto.Community communityToCommunityInfo(Community community) {
        MemberInfoDto.Community response = MemberInfoDto.Community.builder()
                .boardTab(community.getTab().getTabName())
                .boardTitle(community.getTitle())
                .boardCreatedAt(community.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
        return response;
    }

    List<MemberInfoDto.Community> communityToCommunityInfos(List<Community> communities);


    default MemberInfoDto.Comment commentToCommentInfo(CommunityComment cc) {
        MemberInfoDto.Comment response = new MemberInfoDto.Comment(
                cc.getCommunity().getTab().getTabName(),
                cc.getComment(),
                cc.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        return response;
    }

    List<MemberInfoDto.Comment> commentsToCommentInfos(List<CommunityComment> comments);


    default MemberInfoDto.CommunityBookmark communityBookmarkToCommunityBookmarkInfo(CommunityBookmark cb) {
        Community c = cb.getCommunity();
        MemberInfoDto.CommunityBookmark response = new MemberInfoDto.CommunityBookmark(
                c.getCommunityId(),
                c.getTab().getTabName(),
                c.getTitle(),
                c.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        return response;
    }

    List<MemberInfoDto.CommunityBookmark> commentsToCommunityBookmarkInfos (List<CommunityBookmark> communityBookmarks);


}
