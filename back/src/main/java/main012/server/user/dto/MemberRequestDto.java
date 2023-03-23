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
        @NotBlank(message = "이메일을 입력해주세요.")
        @Email(message = "이메일 형식에 맞지 않습니다.")
        private String email;

        @NotBlank(message = "닉네임을 입력해주세요")
        private String displayName;

        private String password;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SignUpOwner {
        @NotBlank(message = "이메일을 입력해주세요.")
        @Email(message = "이메일 형식에 맞지 않습니다.")
        private String email;

        @NotBlank(message = "닉네임은 입력해주세요.")
        private String displayName;

        private String password;

        @NotBlank(message = "사업자등록번호는 필수 입력값입니다.")
        private String businessNumber;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ModifyPassword {
        @NotBlank(message = "기존 비밀번호를 입력해주세요.")
        private String originPassword;

        private String newPassword;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ModifyProfile {
        @NotBlank(message = "닉네임은 필수 입력값입니다.")
        private String displayName;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Quit {
        @NotBlank(message = "탈퇴 동의를 해주세요.")
        private Boolean isAgreed;
        @NotBlank(message = "비밀번호를 입력해주세요.")
        private String password;
    }


}
