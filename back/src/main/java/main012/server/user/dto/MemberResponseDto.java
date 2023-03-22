package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

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

    @Getter
    @AllArgsConstructor
    public static class SearchMemberPage<T> {
        private Long memberId;
        private int totalCnt;
        private List<T> contents;
        private int totalElements;
        private Long nextCursor;
    }

}
