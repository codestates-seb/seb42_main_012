package main012.server.user.enums;

import lombok.Getter;

public enum MemberStatus {

    MEMBER_ACTIVE("활동중"),
    MEMBER_SLEEP("휴먼 상태"),
    MEMBER_DELETED("탈퇴 상태");

    @Getter
    private String status;

    MemberStatus(String status) {
        this.status = status;
    }
}

