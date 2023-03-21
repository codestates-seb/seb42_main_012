package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class MemberInfoDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Community {
        private Long memberId;
        private String boardTab;
        private String boardTitle;
        private String boardCreatedAt;
    }
}
