package main012.server.gym.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class FacilitiesDto {
    @Getter
    public static class Post {
        private Long facilityId;
        @NotBlank(message = "시설을 입력해주세요")
        private String facilityName;
    }

    @Getter
    @RequiredArgsConstructor
    @ToString
    public static class Patch{
        private Long facilityId;
        @NotBlank(message = "시설을 입력해주세요")
        private String facilityName;
    }

    @Getter
    @Setter
    @RequiredArgsConstructor
    @ToString
    public static class Response {
        private Long facilityId;
        private String facilityName;
    }

}
