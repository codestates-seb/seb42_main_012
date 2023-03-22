package main012.server.community.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class CommentDto {

    @Getter
    @Setter
    public static class Post {
        private Long communityId;
        private String comment;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long commentId;
        private String comment;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private String comment;
        private String displayName;
        private Long commentId;
        private Long communityId;
    }

}
