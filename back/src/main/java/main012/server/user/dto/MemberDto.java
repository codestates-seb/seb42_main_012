package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class CommonMemberRequest {
        private String email;
        private String displayName;
        private String password;
    }

}
