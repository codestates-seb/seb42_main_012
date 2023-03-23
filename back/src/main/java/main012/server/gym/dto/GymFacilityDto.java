package main012.server.gym.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class GymFacilityDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private Long facilityId;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        private Long gymFacilityId;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long gymFacilityId;
        private String facilityName;


    }

}
