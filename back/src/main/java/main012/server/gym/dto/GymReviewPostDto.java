package main012.server.gym.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter @Setter
@NoArgsConstructor
public class GymReviewPostDto {

    @Min(1) @Max(5)
    private long gymGrade;

    @NotBlank(message = "리뷰를 작성해주세요")
    @Size(min = 20)
    private String gymComment;
}
