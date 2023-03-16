package main012.server.gym.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class GymPostDto {
    @NotBlank(message = "헬스장 이름을 입력해 주세요")
    private String gymName;
    @NotBlank(message = "주소를 입력해 주세요")
    private String address;
    @NotBlank(message = "핸드폰 번호를 입력해 주세요")
    @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
            message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
    private String phoneNumber;
    @NotBlank(message = "휴무일을 입력해 주세요")
    private String offDays;
    @NotBlank(message = "오픈 시간을 입력해 주세요")
    private String openingTime;
//    @NotBlank(message = "위도를 입력해 주세요")
//    private Double latitude;
//    @NotBlank(message = "경도를 입력해 주세요")
//    private Double longitude;

    public String getGymName() {
        return gymName;
    }

    public void setGymName(String gymName) {
        this.gymName = gymName;
    }
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getOffDays() {
        return offDays;
    }

    public void setOffDays(String offDays) {
        this.offDays = offDays;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }


}
