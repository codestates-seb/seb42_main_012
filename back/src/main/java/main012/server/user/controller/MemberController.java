package main012.server.user.controller;

import lombok.RequiredArgsConstructor;
import main012.server.auth.resolver.AuthMember;
import main012.server.user.dto.MemberRequestDto;
import main012.server.user.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    /**
     * 일반 회원 가입
     */
    @PostMapping("/common")
    public ResponseEntity signUpMember(@RequestBody MemberRequestDto.SignUpMember request) {

        memberService.signUpMember(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    /**
     * 헬스장 사업주 가입
     */
    @PostMapping("/owners")
    public ResponseEntity signUpOwner(@RequestBody MemberRequestDto.SignUpOwner request) {

        memberService.signUpOwner(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/test1")
    @RolesAllowed("ROLE_USER")
    public void userTest(@AuthMember Long memberId) {
        System.out.println("테스트 1번 : " + memberId);
        System.out.println("일반 회원랑 관리자만 가능함");
    }

    @GetMapping("/test2")
    @RolesAllowed({"ROLE_OWNER"})
    public void testing() {
        System.out.println("오너랑 관리자만 가능함");
        System.out.println("roleAllowed 애너테이션 돌아감");
    }

    @GetMapping("/test3")
    @RolesAllowed("ROLE_ADMIN")
    public void findMemberIdTest(@AuthMember Long memberId) {
        System.out.println("테스트 3번 :" + memberId);
    }

}
