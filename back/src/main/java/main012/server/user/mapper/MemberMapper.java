package main012.server.user.mapper;

import main012.server.user.dto.MemberDto;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberSignUpDtoToMember (MemberDto.MemberSignUp request);

    Member ownerSignUpDtoToMember(MemberDto.OwnerSignUp request);

}
