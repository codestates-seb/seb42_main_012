package main012.server.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ErrorResponseDto {
    private int status;
    private String message;

    public ErrorResponseDto(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public static ErrorResponseDto of(HttpStatus status) {
        return new ErrorResponseDto(status.value(), status.getReasonPhrase());
    }

}
