package main012.server.gym.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class GymPatchDto {
    private long gymId;

    private String gymName;

    private String address;

    private String phoneNumber;
    private String businessHours;

    private Double latitude;

    private Double longitude;


}
