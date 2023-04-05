package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class MemberInfoDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Communities {
        private Long boardId;
        private String boardTab;
        private String boardTitle;
        private String boardCreatedAt;
    }

    @Getter
    @AllArgsConstructor
    public static class Comments {
        private Long boardId;
        private String boardTab;
        private String boardCommentContent;
        private String boardCommentCreatedAt;
    }

    @Getter
    @AllArgsConstructor
    public static class GymBookmarks {
        private Long gymId;
        private String gymImage;
        private String gymName;
    }

    @Getter
    @AllArgsConstructor
    public static class GymReviews {
        private Long gymId;
        private long gymGrade;
        private String gymReviewContent;
        private String gymReviewCreatedAt;
    }

}
