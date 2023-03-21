package main012.server.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class AuthDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Login {
        private String email; // username
        private String password;
    }
}
