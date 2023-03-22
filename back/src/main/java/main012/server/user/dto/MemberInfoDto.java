package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class MemberInfoDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Community {
        private String boardTab;
        private String boardTitle;
        private String boardCreatedAt;
    }

    @Getter
    @AllArgsConstructor
    public static class Comment {
        private String boardTab;
        private String boardCommentContent;
        private String boardCommentCreatedAt;
    }

    @Getter
    @AllArgsConstructor
    public static class CommunityBookmark {
        private Long boardId;
        private String boardTab;
        private String boardTitle;
        private String boardCreatedAt;
    }

}
