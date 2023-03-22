package main012.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberRequestDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SignUpMember {
        @NotBlank(message = "이메일은 필수 입력값입니다.")
        @Email(message = "이메일 형식에 맞지 않습니다.")
        private String email;

        @NotBlank(message = "닉네임은 필수 입력값입니다.")
        private String displayName;

        private String password;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SignUpOwner {
        @NotBlank(message = "이메일은 필수 입력값입니다.")
        @Email(message = "이메일 형식에 맞지 않습니다.")
        private String email;

        @NotBlank(message = "닉네임은 필수 입력값입니다.")
        private String displayName;

        private String password;

        private String businessNumber;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ModifyPassword {
        private String originPassword;
        private String newPassword;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ModifyProfile {
        private String displayName;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Quit {
        private Boolean isAgreed;
        private String password;
    }


}
