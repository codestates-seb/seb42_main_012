package main012.server.user.mapper;

import main012.server.user.dto.MemberResponseDto;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

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

//    default MemberResponseDto.MyCommunity memberToMyCommunityDto() {
//
//    }

    default MemberResponseDto.Profile memberToProfileDto(Member member) {
        MemberResponseDto.Profile response = MemberResponseDto.Profile.builder()
                .displayName(member.getDisplayName())
                .profileImage(member.getImage().getImagePath())
                .build();

        return response;
    }

}
