package main012.server.auth.handler;

import lombok.extern.slf4j.Slf4j;
import main012.server.auth.utils.ErrorResponder;
import main012.server.exception.ExceptionCode;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class MemberAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        ExceptionCode exception = (ExceptionCode) request.getAttribute("exception");

        if (exception == null) {
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED,
                    ExceptionCode.BAD_TOKEN_REQUEST);
        } else {
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, exception);
        }

        logExceptionMessage(authException, exception);
    }

    private void logExceptionMessage(AuthenticationException authException, ExceptionCode exception) {
        String message = exception != null ? exception.getMessage() : authException.getMessage();
        log.warn("Unauthorized error happened: {}", message);
    }
}
