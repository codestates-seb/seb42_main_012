package main012.server.gym.dto;

import lombok.Getter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
public class GymReviewPatchDto {
    private Long id;

    @NotBlank(message = "평점을 입력해주세요")
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
