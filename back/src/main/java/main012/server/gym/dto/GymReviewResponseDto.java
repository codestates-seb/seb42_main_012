package main012.server.gym.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GymReviewResponseDto {
    private Long id;

    private long gymGrade;

    private String gymComment;
}
