package main012.server.gym.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class GymPriceDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private Long price;
        private String priceName;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        private Long id;
        private Long price;
        private String priceName;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long id;
        private Long price;
        private String priceName;


    }
}
