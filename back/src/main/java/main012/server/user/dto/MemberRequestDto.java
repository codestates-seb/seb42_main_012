package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class MemberRequestDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SignUpMember {
        private String email;
        private String displayName;
        private String password;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SignUpOwner {
        private String email;
        private String displayName;
        private String password;
        private String businessNumber;
    }


}
