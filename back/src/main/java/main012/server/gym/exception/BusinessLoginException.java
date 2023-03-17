package main012.server.gym.exception;

import lombok.Getter;

public class BusinessLoginException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLoginException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
