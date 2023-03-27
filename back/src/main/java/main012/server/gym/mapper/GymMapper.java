package main012.server.gym.mapper;

import main012.server.gym.dto.GymDto;

import main012.server.gym.entity.Facility;
import main012.server.gym.entity.Gym;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
//@Component
public interface GymMapper {


    default Gym gymPostDtoToGym(GymDto.Post request) {
        Gym gym = new Gym(
                request.getGymName(),
                request.getAddress(),
                request.getPhoneNumber(),
                request.getBusinessHours(),
                request.getPrice(),
                request.getDetailPrices(),
                request.getLatitude(),
                request.getLongitude()
        );

        Member member = new Member();
        member.setId(request.getMemberId());
        gym.setMember(member);

        return gym;
    }

    Gym gymPatchDtoToGym(GymDto.Patch gymPatchDto);

    default GymDto.Response gymToGymResponseDto(Gym gym, Long gymBookmarkCnt) {
        List<String> facilityNames = gym.getFacilities().stream()
                .map(facility -> facility.getFacilityName())
                .collect(Collectors.toList());

        GymDto.Response responseGym = new GymDto.Response(
                gym.getMember().getId(),
                gym.getId(),
                gym.getGymName(),
                gymToGymImageDtos(gym),
                gym.getAddress(),
                gym.getPhoneNumber(),
                gym.getPrice(),
                gym.getDetailPrices(),
                gym.getBusinessHours(),
                facilityNames,
                gymBookmarkCnt
        );

        return responseGym;
    }

    default List<GymDto.GymImage> gymToGymImageDtos(Gym gym) {
        return gym.getGymImages().stream()
                .map(gymImage -> {
                    GymDto.GymImage dto = new GymDto.GymImage(
                            gymImage.getId(),
                            gymImage.getImage().getImagePath()
                    );
                    return dto;
                } )
                .collect(Collectors.toList());
    }

    List<GymDto.Response> gymsToGymResponseDtos(List<Gym> gyms);
//    List<GymDto.RankResponse> gymToGymRankListResponse(List<Gym> gym); // 추천 게시글용 매핑

}
