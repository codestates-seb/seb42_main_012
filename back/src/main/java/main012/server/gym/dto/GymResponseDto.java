package main012.server.gym.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GymResponseDto {
    private Long id;
    private String gymName;
    private String address;
    private String phoneNumber;
    private String businessHours;
}
