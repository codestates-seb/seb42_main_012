package main012.server.gym.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;

public class GymReviewDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        @Min(1) @Max(5)
        private long gymGrade;

        @NotBlank(message = "리뷰를 작성해주세요")
        @Size(min = 20)
        private String gymComment;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        private Long id;


        @Min(1) @Max(5)
        private long gymGrade;

        @NotBlank(message = "리뷰를 작성해주세요")
        @Size(min = 20)
        private String gymComment;

        public long getId() {
            return id;
        }
        public void setId(Long id) {
            this.id = id;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long id;

        private long gymGrade;

        private String gymComment;

    }



}


