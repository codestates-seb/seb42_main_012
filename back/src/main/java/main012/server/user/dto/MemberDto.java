package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class MemberSignUp {
        private String email;
        private String displayName;
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class OwnerSignUp {
        private String email;
        private String displayName;
        private String password;
        private String businessNumber;
    }



}
