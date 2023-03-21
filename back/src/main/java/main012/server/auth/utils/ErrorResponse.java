package main012.server.auth.utils;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ErrorResponse {
    private int status;
    private String message;

    public ErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public static ErrorResponse of(HttpStatus status) {
        return new ErrorResponse(status.value(), status.getReasonPhrase());
    }

}
