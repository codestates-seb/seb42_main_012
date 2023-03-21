package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class MemberResponseDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class MainPage {
        private String profileImage;
        private String displayName;
        private int boardPostCnt;
        private int boardCommentCnt;
        private int gymReviewCnt;
        private int boardBookmarkCnt;
        private int gymBookmarkCnt;
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class MyCommunity {
        private int boardPostCnt;
        private MemberInfoDto.Community contents;
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Profile {
        private String displayName;
        private String profileImage;
    }

}
