package main012.server.gym.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

public class GymDto {

    @Getter
    @Setter //@ModelAttribute 사용하기위함
    @AllArgsConstructor
    @NoArgsConstructor
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

        @NotBlank(message = "대표 가격을 입력해주세요.")
        private String price;
        @NotBlank(message = "상세 가격을 입력해주세요.")
        private String detailPrices;

        private List<Long> facilityIdList;

        private String latitude; // 위도

        private String longitude; // 경도

        private Long memberId;
        private Long gymBookmarkCnt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
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
        private List<Long> facilityIdList;
        private Long[] deletedGymImageId;// 수정하세요
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class facilityListResponse {
        private Long gymId;
        private String gymName;
//        private String gymImageUrl;
        private String address;
        private String price;
        private String businessHours;
        private List<String> facilityName;

        private Long gymBookmarkCnt;
//        private boolean isBookmarked;



    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private Long memberId;
        private Long gymId;
        private String gymName;
        private List<GymDto.GymImage> gymImages;
        private String address;
        private String phoneNumber;
        private String price;
        private String detailPrices;
        private String businessHours;
        private List<String> facilityName;
        private Long gymBookmarkCnt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class GymImage {
        private Long gymImageId;
        private String gymImageUrl;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class RankResponse {

        private int gymBookmarkCnt;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ListResponse<T> {
        private List<T> contents;
        private int totalElements;
        private Long nextCursor;
    }


}
