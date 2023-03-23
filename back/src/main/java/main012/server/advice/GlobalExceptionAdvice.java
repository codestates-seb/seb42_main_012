package main012.server.advice;


import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.extern.slf4j.Slf4j;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ErrorResponseDto;
import main012.server.exception.ExceptionCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

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
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity handleMissingServletRequestParameterException(MissingServletRequestParameterException e) {
        log.info("## MissingServletRequestParameterException : {}", e.getLocalizedMessage());

        ErrorResponseDto response = ErrorResponseDto.of(ExceptionCode.REQUEST_NOT_SUPPORT);

        return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        log.info("## HttpMessageNotReadableException : {}", e.getLocalizedMessage());

        ErrorResponseDto response = ErrorResponseDto.of(ExceptionCode.REQUEST_NOT_SUPPORT);

        return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }

    // @RequestPart 요청이 안 온 경우
    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity handleMissingServletRequestPartException(MissingServletRequestPartException e) {
        log.info("## MissingServletRequestPartException : {}", e.getLocalizedMessage());

        ErrorResponseDto response = ErrorResponseDto.of(ExceptionCode.REQUEST_NOT_SUPPORT);

        return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }

}
