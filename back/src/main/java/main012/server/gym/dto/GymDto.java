package main012.server.gym.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;

public class GymDto {
    @Getter
    @Setter //@ModelAttribute 사용하기위함
    @NoArgsConstructor //@ModelAttribute 사용하기위함
    @ToString
    public static class Post {
        @NotBlank(message = "헬스장 이름을 입력해 주세요")
        private String gymName;
        @NotBlank(message = "주소를 입력해 주세요")
        private String address;
        @NotBlank(message = "핸드폰 번호를 입력해 주세요")
        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
        private String phoneNumber;
        @NotBlank(message = "운영 시간을 입력해 주세요")
        private String businessHours;

        private Long facilitiesId;
    }

    @Getter
    @RequiredArgsConstructor
    @ToString
    public static class Patch{
        private Long id;
        @NotBlank(message = "헬스장 이름을 입력해 주세요")
        private String gymName;
        @NotBlank(message = "주소를 입력해 주세요")
        private String address;
        @NotBlank(message = "핸드폰 번호를 입력해 주세요")
        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
        private String phoneNumber;
        @NotBlank(message = "운영 시간을 입력해 주세요")
        private String businessHours;

        public void setId(Long id) {
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long id;
        private String gymName;
        private String address;
        private String phoneNumber;
        private String businessHours;
        private long gymBookmarkCnt;
    }



}
