package main012.server.user.controller;

import lombok.RequiredArgsConstructor;
import main012.server.auth.resolver.AuthMember;
import main012.server.image.entity.Image;
import main012.server.image.service.ImageService;
import main012.server.user.dto.MemberRequestDto;
import main012.server.user.dto.MemberResponseDto;
import main012.server.user.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;

//@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final ImageService imageService;

    /**
     * 일반 회원 가입
     */
    @PostMapping("/common")
    public ResponseEntity signUpMember(@RequestBody @Valid MemberRequestDto.SignUpMember request) {

        memberService.signUpMember(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    /**
     * 헬스장 사업주 가입
     */
    @PostMapping("/owners")
    public ResponseEntity signUpOwner(@RequestBody @Valid MemberRequestDto.SignUpOwner request) {

        memberService.signUpOwner(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    /**
     * 마이페이지 메인 조회
     */
    @GetMapping("/my")
    public ResponseEntity getMyMain(@AuthMember Long memberId) {
        MemberResponseDto.MainPage mainInfo = memberService.findMainInfo(memberId);

        return new ResponseEntity(mainInfo, HttpStatus.OK);
    }

    /**
     * 마이페이지 내가 쓴 글 조회
     */
//    @GetMapping("/my/communities")
//    public ResponseEntity getMyCommunity(@AuthMember Long memberId,
//                                         @RequestParam int lastFeedId) {
//
//        memberService.findCommunities(memberId, lastFeedId);
//
//    }

    /**
     * 비밀번호 수정
     */
    @PatchMapping("/password")
    public ResponseEntity patchPassword(@AuthMember Long memberId,
                                        @RequestBody MemberRequestDto.ModifyPassword request) {
        memberService.updatePassword(memberId, request);

        return new ResponseEntity(HttpStatus.OK);
    }

    /**
     * 프로필 수정
     */
    @PatchMapping("/info")
    public ResponseEntity patchProfile(@AuthMember Long memberId,
                                       @RequestPart MemberRequestDto.ModifyProfile request,
                                       @RequestPart MultipartFile file) throws IOException {
        Image uploadedImage = null;

        if(!file.isEmpty()){
            uploadedImage = imageService.upload(file, "upload");
        }
        MemberResponseDto.Profile response = memberService.updateProfile(memberId, request, uploadedImage);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    /**
     * 회원 탈퇴
     */
    @DeleteMapping
    public ResponseEntity deleteMember(@AuthMember Long memberId) {
        memberService.removeMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


//    @GetMapping("/test1")
//    @RolesAllowed("ROLE_USER")
//    public void userTest(@AuthMember Long memberId) {
//        System.out.println("테스트 1번 : " + memberId);
//        System.out.println("일반 회원랑 관리자만 가능함");
//    }
//
//    @GetMapping("/test2")
//    @RolesAllowed("ROLE_OWNER")
//    public void testing() {
//        System.out.println("오너랑 관리자만 가능함");
//        System.out.println("roleAllowed 애너테이션 돌아감");
//    }
//
//    @GetMapping("/test3")
//    @RolesAllowed("ROLE_ADMIN")
//    public void findMemberIdTest(@AuthMember Long memberId) {
//        System.out.println("테스트 3번 :" + memberId);
//    }

}
