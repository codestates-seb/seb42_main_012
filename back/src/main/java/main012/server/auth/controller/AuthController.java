package main012.server.auth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.resolver.AuthMember;
import main012.server.auth.service.AuthService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
//@CrossOrigin
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

    @PostMapping("/logout")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity logOut(@AuthMember Long memberId) {
        authService.logOutMember(memberId);

        return new ResponseEntity(HttpStatus.OK);
    }
}
