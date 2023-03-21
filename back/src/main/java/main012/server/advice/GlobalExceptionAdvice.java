package main012.server.advice;


import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ErrorResponse;
import main012.server.exception.ErrorResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionAdvice {
    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        final ErrorResponse response = ErrorResponse.of(e.getBindingResult());

        return response;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleConstraintViolationException(
            ConstraintViolationException e) {
        final ErrorResponse response = ErrorResponse.of(e.getConstraintViolations());
        return response;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleResourceNotFoundException(RuntimeException e) {
        System.out.println(e.getMessage());
        return null;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity handleBusinessLogicException(BusinessLoginException e) {
        System.out.println(e.getExceptionCode().getStatus());
        System.out.println(e.getMessage());

        return new ResponseEntity<>(HttpStatus.valueOf(e.getExceptionCode().getStatus()));
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity handleExpiredJwtException(ExpiredJwtException e) {
        log.debug(e.getMessage());
        log.debug("## AccessToken expiration");

        ErrorResponseDto response = new ErrorResponseDto(HttpStatus.UNAUTHORIZED.value(), e.getMessage());

        return new ResponseEntity(response,HttpStatus.UNAUTHORIZED);
    }
}
