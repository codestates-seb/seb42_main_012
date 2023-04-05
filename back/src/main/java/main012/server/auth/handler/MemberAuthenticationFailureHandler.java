package main012.server.auth.handler;

import lombok.extern.slf4j.Slf4j;
import main012.server.auth.utils.ErrorResponder;
import main012.server.exception.ExceptionCode;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/*
 * 로그인 인증 실패
 */

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        log.error("# Authentication failed : {}", exception.getMessage());

        if(exception.getMessage().equals(ExceptionCode.QUITED_MEMBER.getMessage())) {
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, ExceptionCode.QUITED_MEMBER);
        } else{
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, ExceptionCode.LOGIN_FAILED);
        }
    }


}
