package main012.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    GYM_NOT_FOUND(404, "헬스장을 찾지 못했습니다."),
    GYM_EXISTS(409, "GYM exists"),
    GYMREVIEW_NOT_FOUND(404,"GymReview Not Found"),

    PARAMETER_NOT_VALID(3001, "유효하지 않은 요청값입니다."),
    REQUEST_NOT_SUPPORT(3002, "잘못된 요청입니다."),

    JWT_TOKEN_EXPIRED(5001,"만료된 Token 입니다."),
    NO_TOKEN_IN_HEADER(5002, "Token이 유효하지 않습니다."),
    LOGIN_FAILED(5003, "로그인 인증에 실패했습니다."),
    MEMBER_NOT_FOUND(5004,"유효하지 않은 회원입니다."),
    EMAIL_ALREADY_EXISTS(5005, "이미 존재하는 이메일 입니다."),
    WRONG_PASSWORD(5006, "잘못된 비밀번호 입니다."),
    QUITED_MEMBER(5007, "탈퇴한 회원입니다."),
    DISAGREE_QUITTING(5008, "탈퇴 동의를 하지 않았습니다."),

    COMMUNITY_NOT_FOUND(404, "존재하지 않는 게시글 입니다."),
    COMMENT_NOT_FOUND(404, "존재하지 않는 댓글입니다.")

    ;

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
