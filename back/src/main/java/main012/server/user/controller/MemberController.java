package main012.server.user.controller;

import lombok.RequiredArgsConstructor;
import main012.server.auth.resolver.AuthMember;
import main012.server.common.dto.SingleResponseDto;
import main012.server.image.entity.Image;
import main012.server.image.service.ImageService;
import main012.server.user.dto.MemberInfoDto;
import main012.server.user.dto.MemberRequestDto;
import main012.server.user.dto.MemberResponseDto;
import main012.server.user.dto.MemberResponseDto.SearchMemberPage;
import main012.server.user.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.security.RolesAllowed;
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
     * 비밀번호 수정
     */
    @PatchMapping("/password")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity patchPassword(@AuthMember Long memberId,
                                        @RequestBody MemberRequestDto.ModifyPassword request) {
        memberService.updatePassword(memberId, request);

        return new ResponseEntity(HttpStatus.OK);
    }

    /**
     * 프로필 수정
     */
    @PatchMapping("/info")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity patchProfile(@AuthMember Long memberId,
                                       @RequestPart @Valid MemberRequestDto.ModifyProfile request,
                                       @RequestPart MultipartFile file) throws IOException {
        Image uploadedImage = null;

        if (!file.isEmpty()) {
            uploadedImage = imageService.upload(file, "upload");
        }
        MemberResponseDto.Profile response = memberService.updateProfile(memberId, request, uploadedImage);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    /**
     * 회원 탈퇴
     */
    @DeleteMapping
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity deleteMember(@AuthMember Long memberId,
                                       @RequestBody MemberRequestDto.Quit request) {
        memberService.quitMember(memberId, request);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * 마이페이지 메인 조회
     */
    @GetMapping("/my")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity getMyMain(@AuthMember Long memberId) {
        MemberResponseDto.Profile mainInfo = memberService.findMainInfo(memberId);

        return new ResponseEntity(mainInfo, HttpStatus.OK);
    }

    /**
     * 마이페이지 내가 쓴 글 조회
     */
    @RolesAllowed("ROLE_USER")
    @GetMapping("/my/communities")
    public ResponseEntity getMemberCommunity(@AuthMember Long memberId,
                                             @RequestParam String lastFeedId) {

       SearchMemberPage<MemberInfoDto.Communities> response
                = memberService.searchMemberCommunity(memberId, lastFeedId);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 마이페이지 내가 쓴 댓글 조회
     */
    @RolesAllowed("ROLE_USER")
    @GetMapping("/my/comments")
    public ResponseEntity getMemberComment(@AuthMember Long memberId,
                                           @RequestParam String lastFeedId) {

        SearchMemberPage<MemberInfoDto.Comments> response
                = memberService.searchMemberComment(memberId, lastFeedId);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 마이페이지 게시글 찜 조회
     */
    @RolesAllowed("ROLE_USER")
    @GetMapping("/my/bookmarks/communities")
    public ResponseEntity getMemberCommunityBookmark(@AuthMember Long memberId,
                                                     @RequestParam String lastFeedId) {

        SearchMemberPage<MemberInfoDto.Communities> response
                = memberService.searchMemberCommunityBookmark(memberId, lastFeedId);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 마이페이지 헬스장 찜 조회
     */
    @RolesAllowed("ROLE_USER")
    @GetMapping("/my/bookmarks/gyms")
    public ResponseEntity getMemberGymBookmark(@AuthMember Long memberId,
                                               @RequestParam String lastFeedId) {

        SearchMemberPage<MemberInfoDto.GymBookmarks> response
                = memberService.searchMemberGymBookmark(memberId, lastFeedId);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 마이페이지 내가 쓴 리뷰 조회
     */
    @RolesAllowed("ROLE_USER")
    @GetMapping("/my/reviews")
    public ResponseEntity getMemberGymReview(@AuthMember Long memberId,
                                             @RequestParam String lastFeedId) {

        SearchMemberPage<MemberInfoDto.GymReviews> response
                = memberService.searchMemberGymReview(memberId, lastFeedId);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }
}
