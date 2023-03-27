package main012.server.community.dto;

import javassist.compiler.ast.Member;
import lombok.*;
import main012.server.community.entity.Community;

import java.util.List;
import java.util.Optional;

public class CommunityDto {

    @Getter
    @Setter
    public static class Post {
        private String title;
        private String Content;
        private Long tabId;
    }


    @Getter
    @Setter
    public static class Patch {
        private Long communityId;
        private String title;
        private String content;
        private Long tabId;
        private Long[] deletedCommunityImageId;
    }


    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long communityId;
        private String profileImage;
        private String displayName;
        private String tabName;
        private String title;
        private String content;
        private List<ImageResponse> contentImages;
        private String createdAt;
        private long bookmarkCnt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ImageResponse{
        private Long contentImageId;
        private String contentImageUrl;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AllCommunityResponse{

        private Long communityId;
        private Long memberId;
        private Long tabId;
        private String title;
        private int viewCnt;
        private String createdAt;
        private boolean isBookmarked;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TabListResponse{
        private Long communityId;
        private Long memberId;
        private Long tabId;
        private String tabName;
        private String title;
        private String createdAt;
        private int viewCnt;
        private boolean isBookmarked;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class WorkoutTabResponse{
        private Long tabId;
        private Long communityId;
        private String contentImageUrl;
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
