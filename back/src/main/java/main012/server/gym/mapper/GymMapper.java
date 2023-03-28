package main012.server.gym.mapper;

import main012.server.gym.dto.GymDto;

import main012.server.gym.entity.Gym;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
//@Component
public interface GymMapper {


    // 헬스장 등록
    default Gym gymPostDtoToGym(GymDto.Post request, Long gymBookmarkCnt) {
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


    // 헬스장 수정 (수정해야함)
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
                })
                .collect(Collectors.toList());
    }

    //헬스장 전체조회 응답
//    default GymDto.AllGymResponse gymToAllGymResponse(Gym gym) {
//        List<String> facilityNames = gym.getFacilities().stream()
//                .map(facility -> facility.getFacilityName())
//                .collect(Collectors.toList());
//        GymDto.AllGymResponse allGymResponse = new GymDto.AllGymResponse();
//
//        allGymResponse.setGymId(gym.getId());
//        allGymResponse.setGymName(gym.getGymName());
//        allGymResponse.setPrice(gym.getPrice());
//        allGymResponse.setBusinessHours(gym.getBusinessHours());
//
//        return allGymResponse;


//    default GymDto.AllGyms gymTogymInfo(Gym gym) {
//        GymDto.AllGyms response = GymDto.AllGyms.builder()
//                .gymId(gym.getId())
//                .gymName(gym.getGymName())
//                .gym();
//        return response;
//    }
    default GymDto.GymInfo gymToGimInfo(Gym gym, Boolean isBookmarked, String gymImageUrl){
        GymDto.GymInfo response = new GymDto.GymInfo(
                gym.getId(),
                gym.getGymName(),
                gymImageUrl,
                gym.getAddress(),
                gym.getPrice(),
                gym.getBusinessHours(),
                gymToFacilityList(gym),
                isBookmarked
        );

        return response;
    }

    default List<GymDto.FacilityInfo> gymToFacilityList(Gym gym) {
        List<GymDto.FacilityInfo> lists = new ArrayList<>();
        gym.getFacilities().stream()
                .forEach(facility -> {
                    GymDto.FacilityInfo facilityInfo = new GymDto.FacilityInfo(
                            facility.getId(),
                            facility.getFacilityName());
                    lists.add(facilityInfo);
                });
        return lists;
    }

}


