package main012.server.gym.mapper;

import main012.server.gym.dto.GymDto;

import main012.server.gym.entity.Gym;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import javax.validation.Valid;
import java.util.List;

@Mapper(componentModel = "spring")
//@Component
public interface GymMapper {


    default Gym gymPostDtoToGym(GymDto.@Valid Post gymPostDto, Long memberId) {
        Gym gym = new Gym();
        Member member = new Member();
        member.setId(memberId);

        gym.setGymName(gymPostDto.getGymName());
        gym.setAddress(gymPostDto.getAddress());
        gym.setPhoneNumber(gymPostDto.getPhoneNumber());
        gym.setBusinessHours(gymPostDto.getBusinessHours());
//        gym.setGymFacility(GymFacility.builder().facility(gymPostDto.getFacility()).build());

        gym.setMember(member);
        return gym;
    }

    Gym gymPatchDtoToGym(GymDto.Patch gymPatchDto);
    default GymDto.Response gymToGymResponseDto(Gym gym) {
        GymDto.Response responseGym = new GymDto.Response();

        responseGym.setId(gym.getId());
        responseGym.setGymName(gym.getGymName());
        responseGym.setAddress(gym.getAddress());
        responseGym.setPhoneNumber(gym.getPhoneNumber());
        responseGym.setBusinessHours(gym.getBusinessHours());

        responseGym.setGymBookmarkCnt(gym.getGymBookmarks().size());

        return responseGym;
    }
    List<GymDto.Response> gymsToGymResponseDtos(List<Gym> gyms);

}
