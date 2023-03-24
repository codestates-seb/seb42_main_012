package main012.server.community.dto;

import lombok.*;

import java.util.List;

public class CommunityDto {

    @Getter
    @Setter
    public static class Post {
        private String title;
        private String Content;
        private Long tabId;
        private List<String> communityImageUrl;
    }


    @Getter
    @Setter
    public static class Patch {
        private Long communityId;
        private String title;
        private String content;
//        private Long tabId;
        private List<String> communityImageUrl;
    }


    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long communityId;
        private String profileImageUrl;
        private String displayName;
        private String tabName;
        private String title;
        private String content;
        private List<String> communityImageUrl;
        private String createdAt;
        private long bookmarkCnt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AllCommunityResponse{

        private Long communityId;
        private String title;
        private String tabName;
        private String createdAt;
        private int viewCnt;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TabListResponse{
        private Long communityId;
        private Long tabId;
        private String tabName;
        private String title;
        private String createdAt;
        private int viewCnt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class WorkoutTabResponse{
        private Long tabId;
        private List<String> contentImageUrl;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class listResponse<T> {
        private List<T> contents;
        private int totalElements;
        private Long nextCursor;
    }

}
