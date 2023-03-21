package main012.server.auth.handler;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.utils.ErrorResponder;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
      log.error("# Authentication failed : {}", exception.getMessage());

      ErrorResponder.sendErrorResponse(response);
    }


}
