package main012.server.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;

@Getter
public class ErrorResponseDto {
    private int status;
    private String message;

    public ErrorResponseDto(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public static ErrorResponseDto of(ExceptionCode exceptionCode) {
        return new ErrorResponseDto(exceptionCode.getStatus(), exceptionCode.getMessage());
    }

    public static ErrorResponseDto of(int status, String exceptionMessage) {
        return new ErrorResponseDto(status, exceptionMessage);
    }

    public static ErrorResponseDto of(BindingResult bindingResult) {
        int status = ExceptionCode.PARAMETER_NOT_VALID.getStatus();
        String message = bindingResult.getFieldError().getDefaultMessage();
        return new ErrorResponseDto(status, message);
    }

}
