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
        private Long boardPostCnt;
        private Long boardCommentCnt;
        private Long gymReviewCnt;
        private Long boardBookmarkCnt;
        private Long gymBookmarkCnt;
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class MyCommunity {
        private int boardPostCnt;
        private MemberInfoDto.Communities contents;
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
        private Long totalCnt;
        private List<T> contents;
        private int totalElements;
        private Long nextCursor;
    }

}
