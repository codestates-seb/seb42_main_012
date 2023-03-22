package main012.server.gym.mapper;

import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymPostDto;
import main012.server.gym.dto.GymResponseDto;
import main012.server.gym.entity.Gym;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Mapper(componentModel = "spring")
//@Component
public interface GymMapper {


    default Gym gymPostDtoToGym(GymPostDto gymPostDto, Long memberId) {
        Gym gym = new Gym();
        Member member = new Member();
        member.setId(memberId);

        gym.setGymName(gymPostDto.getGymName());
        gym.setAddress(gymPostDto.getAddress());
        gym.setPhoneNumber(gymPostDto.getPhoneNumber());
        gym.setBusinessHours(gymPostDto.getBusinessHours());

        gym.setMember(member);
        return gym;
    }

    Gym gymPatchDtoToGym(GymPatchDto gymPatchDto);
    GymResponseDto gymToGymResponseDto(Gym gym);
    List<GymResponseDto> gymsToGymResponseDtos(List<Gym> gyms);

//    List<Gym> getGymsByScoreDesCode(@Param("bookmarkId") int bookmarkId, @)

}
