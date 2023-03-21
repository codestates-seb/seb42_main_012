package main012.server.auth.utils;

import com.google.gson.Gson;
import main012.server.exception.ErrorResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ErrorResponder {
    public static void sendErrorResponse(HttpServletResponse response, HttpStatus status) throws IOException {
        Gson gson = new Gson();
        ErrorResponseDto errorResponseDto = ErrorResponseDto.of(status);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());
        response.getWriter().write(gson.toJson(errorResponseDto, ErrorResponseDto.class));
    }

    public static void sendErrorResponse(HttpServletResponse response) throws IOException {
        Gson gson = new Gson();
        ErrorResponseDto errorResponseDto = ErrorResponseDto.of(HttpStatus.UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.getWriter().write(gson.toJson(errorResponseDto, ErrorResponseDto.class));
    }
}
