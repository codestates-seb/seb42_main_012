package main012.server.gym.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class GymBookmarkDto {
    @Positive
    @NotNull
    private Long gymId;
}
