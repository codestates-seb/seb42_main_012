package main012.server.community.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Optional;

public class CommentDto {

    @Getter
    @Setter
    public static class Post {
        private Long communityId;
        @NotBlank(message = "댓글 내용을 입력하세요.")
        private String comment;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long commentId;
        @NotBlank(message = "댓글 내용을 입력하세요.")
        private String comment;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private Long commentId;
        private Long memberId;
        private String comment;
        private String displayName;
        private String profileImage;
        private String createdAt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class RequestResponse{
        private Long commentId;
        private Long communityId;
        private String displayName;
        private String profileImage;
        private String comment;
        private String createdAt;
    }

}
