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

        @Pattern(regexp = "^(?=.*[A-Za-z!@#$%^&*])(?=.*\\d)[A-Za-z!@#$%^&*\\d]{8,}$",
                message = "비밀번호는 최소 4자 이상, 숫자와 영문자의 조합으로 이루어져야 합니다. (특수문자 추가 가능)")
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

        @Pattern(regexp = "",
                message = "사업자등록번호는 9자의 숫자로 입력되어야 합니다.")
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



}
