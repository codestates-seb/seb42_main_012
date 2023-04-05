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

    private double avgGymGrade;
    private int bookmarkSize;

    public GymWithDistance(Gym gym, Double distance) {
        this.gym = gym;
        this.distance = distance;
    }
}
