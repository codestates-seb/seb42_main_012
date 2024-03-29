package main012.server.auth.handler;

import lombok.extern.slf4j.Slf4j;
import main012.server.auth.utils.ErrorResponder;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/*
* 인증은 성공했지만, 해당 리소스에 대한 권한이 없으면 호출되는 핸들러
 */
@Slf4j
@Component
public class MemberAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        ErrorResponder.sendErrorResponse(response,
                                        HttpStatus.FORBIDDEN,
                                        accessDeniedException.getLocalizedMessage());
        log.warn("Forbidden error happened: {}", accessDeniedException.getMessage());
    }
}
