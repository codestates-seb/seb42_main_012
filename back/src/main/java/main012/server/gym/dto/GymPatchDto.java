package main012.server.gym.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class GymPatchDto {
    private long gymId;
    @NotBlank(message = "헬스장 이름을 입력해 주세요")
    private String gymName;
    @NotBlank(message = "주소를 입력해 주세요")
    private String address;
    @NotBlank(message = "핸드폰 번호를 입력해 주세요")
    @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
            message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
    private String phoneNumber;
    private String businessHours;

    private Double latitude;

    private Double longitude;
    public long getGymId() {
        return gymId;
    }
    public void setGymId(long gymId) {
        this.gymId = gymId;
    }
}
