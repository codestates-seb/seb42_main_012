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

        @NotBlank(message = "닉네임을 입력해주세요. 공백은 허용되지 않습니다.")
        private String displayName;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#^*_])[A-Za-z\\d!@#^*_]{8,}$",
                message = "비밀번호는 영문(대소문자), 숫자 및 특수문자(!@#^*_) 포함 최소 8자 이상으로 입력해주세요.")
        private String password;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SignUpOwner {
        @NotBlank(message = "이메일을 입력해주세요.")
        @Email(message = "이메일 형식에 맞지 않습니다.")
        private String email;

        @NotBlank(message = "닉네임을 입력해주세요. 공백은 허용되지 않습니다.")
        private String displayName;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#^*_])[A-Za-z\\d!@#^*_]{8,}$",
                message = "비밀번호는 영문(대소문자), 숫자 및 특수문자(!@#^*_)를 포함 최소 8자 이상으로 입력해주세요.")
        private String password;

        @Pattern(regexp = "^\\d{3}-\\d{2}-\\d{5}$",
                message = "사업자등록번호를 형식(000-00-00000)에 맞게 입력해주세요.")
        private String businessNumber;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ModifyPassword {
        @NotBlank(message = "기존 비밀번호를 입력해주세요.")
        private String originPassword;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#^*_])[A-Za-z\\d!@#^*_]{8,}$",
                message = "비밀번호는 영문(대소문자), 숫자 및 특수문자(!@#^*_)를 포함 최소 8자 이상으로 입력해주세요.")
        private String newPassword;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ModifyProfile {
        @NotBlank(message = "닉네임을 입력해주세요. 공백은 허용되지 않습니다.")
        private String displayName;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Quit {
        private Boolean isAgreed;
        @NotBlank(message = "비밀번호를 입력해주세요.")
        private String password;
    }
}
