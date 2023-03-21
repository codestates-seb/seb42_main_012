package main012.server.auth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.service.AuthService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthService authService;

    /**
     * AccessToken 재발급
     * RefreshToken은 그대로 사용
     */
    @PostMapping("/refresh")
    public ResponseEntity createRefreshToken(@RequestHeader("Authorization-Refresh") String refreshToken) {
        log.info("## refreshToken: {}", refreshToken);
        String reIssuedAccessToken = authService.reIssueAccessToken(refreshToken);

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.AUTHORIZATION,"Bearer " + reIssuedAccessToken);
        headers.add("Authorization-Refresh", refreshToken);

        return ResponseEntity.ok().headers(headers).build();
    }
}
