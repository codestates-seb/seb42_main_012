package main012.server.gym.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import main012.server.gym.entity.Gym;

@Getter
@Setter
@AllArgsConstructor
public class GymWithDistance {
    private Gym gym;
    private Double distance;
}
