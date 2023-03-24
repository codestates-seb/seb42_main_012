package main012.server.user.service;

import main012.server.image.entity.Image;
import main012.server.user.dto.MemberRequestDto;
import main012.server.user.dto.MemberResponseDto;
import main012.server.user.entity.Member;

public interface MemberService {
    void signUpMember(MemberRequestDto.SignUpMember request);

    void signUpOwner(MemberRequestDto.SignUpOwner request);

    void verifyExistsEmail(String email);

    Member findVerifyMember(Long memberId);

    MemberResponseDto.Profile findMainInfo(Long memberId);

    void updatePassword(Long memberId, MemberRequestDto.ModifyPassword request);

    MemberResponseDto.Profile updateProfile(Long memberId, MemberRequestDto.ModifyProfile request, Image image);

    void quitMember(Long memberId, MemberRequestDto.Quit request);

    MemberResponseDto.SearchMemberPage searchMemberCommunity(Long memberId, String lastFeedId);

    MemberResponseDto.SearchMemberPage searchMemberComment(Long memberId, String lastFeedId);

    MemberResponseDto.SearchMemberPage searchMemberCommunityBookmark(Long memberId, String lastFeedId);

    MemberResponseDto.SearchMemberPage searchMemberGymBookmark(Long memberId, String lastFeedId);

    MemberResponseDto.SearchMemberPage searchMemberGymReview (Long memberId, String lastFeedId);
}
