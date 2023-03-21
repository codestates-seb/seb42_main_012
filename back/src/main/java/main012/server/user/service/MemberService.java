package main012.server.user.service;

import main012.server.user.dto.MemberRequestDto;
import main012.server.user.entity.Member;

public interface MemberService {
    void signUpMember(MemberRequestDto.SignUpMember request);
    void signUpOwner(MemberRequestDto.SignUpOwner request);

    void verifyExistsEmail(String email);
    Member findVerifyMember(Long memberId);

}
