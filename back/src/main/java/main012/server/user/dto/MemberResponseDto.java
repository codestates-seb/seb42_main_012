package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class MemberResponseDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Profile {
        private Long memberId;
        private String displayName;
        private String email;
        private String profileImage;
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class ModifiedProfile {
        private String displayName;
        private String profileImage;
    }


    @Getter
    @AllArgsConstructor
    public static class SearchMemberPage<T> {
        private Long memberId;
        private Long totalCnt;
        private List<T> contents;
        private int totalElements;
        private Long nextCursor;
    }

}
