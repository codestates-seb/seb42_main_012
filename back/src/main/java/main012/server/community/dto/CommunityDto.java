package main012.server.community.dto;

import lombok.*;

public class CommunityDto {

    @Getter
    @Setter
    public static class Post {
        private String title;
        private String Content;
        private Long memberId;
        private Long tabId;
    }


    @Getter
    @Setter
    public static class Patch {
        private Long communityId;
        private String title;
        private String content;
//        private Long tabId;
    }


    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long communityId;
        private String displayName;
        private String tabName;
        private String title;
        private String content;
//        private Long bookmarkCnt;
    }


}
