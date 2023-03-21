package main012.server.advice;


import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ErrorResponseDto;
import main012.server.exception.ExceptionCode;
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
    public ResponseEntity handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {

        ErrorResponseDto response = ErrorResponseDto.of(e.getBindingResult());

        return new ResponseEntity(response, HttpStatus.EXPECTATION_FAILED);
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity handleConstraintViolationException(
            ConstraintViolationException e) {

        ErrorResponseDto response = ErrorResponseDto.of(ExceptionCode.REQUEST_NOT_SUPPORT);

        return new ResponseEntity(response, HttpStatus.EXPECTATION_FAILED);
    }

//    @ExceptionHandler
//    @ResponseStatus(HttpStatus.NOT_FOUND)
//    public ErrorResponse handleResourceNotFoundException(RuntimeException e) {
//        System.out.println(e.getMessage());
//        return null;
//    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity handleBusinessLogicException(BusinessLoginException e) {
        log.info("## BusinessLogicException : {}, {}",
                e.getExceptionCode().getStatus(),
                e.getExceptionCode().getMessage());

        ErrorResponseDto response = ErrorResponseDto.of(e.getExceptionCode());

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity handleExpiredJwtException(ExpiredJwtException e) {
        log.info("## JWT Token expired : {}",
                e.getMessage());

        ErrorResponseDto response = ErrorResponseDto.of(ExceptionCode.JWT_TOKEN_EXPIRED);

        return new ResponseEntity(response,HttpStatus.UNAUTHORIZED);
    }
}
