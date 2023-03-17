package main012.server.user.controller;

import lombok.RequiredArgsConstructor;
import main012.server.user.dto.MemberDto;
import main012.server.user.entity.Member;
import main012.server.user.mapper.MemberMapper;
import main012.server.user.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    private final MemberMapper memberMapper;

    /**
     * 일반 회원 가입
     */
    @PostMapping("/common")
    public ResponseEntity postMember(@RequestBody MemberDto.MemberSignUp request) {

        Member member = memberMapper.memberSignUpDtoToMember(request);
        memberService.createMember(member);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    /**
     * 헬스장 사업주 가입
     */
    @PostMapping("/owners")
    public ResponseEntity postOwner(@RequestBody MemberDto.OwnerSignUp request) {

        Member owner = memberMapper.ownerSignUpDtoToMember(request);
        memberService.createOwner(owner);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}
