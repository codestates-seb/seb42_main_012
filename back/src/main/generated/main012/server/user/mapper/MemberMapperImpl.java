package main012.server.user.mapper;

import javax.annotation.processing.Generated;
import main012.server.user.dto.MemberDto.MemberSignUp;
import main012.server.user.dto.MemberDto.OwnerSignUp;
import main012.server.user.entity.Member;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-18T02:04:39+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberSignUpDtoToMember(MemberSignUp request) {
        if ( request == null ) {
            return null;
        }

        Member member = new Member();

        member.setDisplayName( request.getDisplayName() );
        member.setEmail( request.getEmail() );
        member.setPassword( request.getPassword() );

        return member;
    }

    @Override
    public Member ownerSignUpDtoToMember(OwnerSignUp request) {
        if ( request == null ) {
            return null;
        }

        Member member = new Member();

        member.setDisplayName( request.getDisplayName() );
        member.setEmail( request.getEmail() );
        member.setPassword( request.getPassword() );
        member.setBusinessNumber( request.getBusinessNumber() );

        return member;
    }
}
