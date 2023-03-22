package main012.server.gym.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class GymReviewPatchDto {
    private Long id;

    private long gymGrade;

    @NotBlank(message = "리뷰를 작성해 주세요")
    private String gymComment;

    public long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

}
