package main012.server.gym.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.resolver.AuthMember;
import main012.server.common.dto.SingleResponseDto;
import main012.server.community.dto.CommunityDto;
import main012.server.gym.dto.GymDto;

import main012.server.gym.entity.Gym;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.service.GymBookmarkService;
import main012.server.gym.service.GymService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;

import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/gyms")
@RequiredArgsConstructor
@Slf4j
public class GymController {
    private final GymBookmarkService gymBookmarkService;
    private final GymService gymService;
    private final GymMapper mapper;

    private static final int DEFAULT_SIZE = 15;// 커서 페이지네이션




    // 헬스장 등록
    @PostMapping
    @RolesAllowed("ROLE_OWNER")
    public ResponseEntity postGym(@AuthMember Long memberId,
                                  @RequestPart("request") GymDto.Post request,
                                  @RequestPart("files")List<MultipartFile> files) throws IOException {

        request.setMemberId(memberId);
        Gym gym = gymService.createGym(request, files,memberId);

        GymDto.Response response = mapper.gymToGymResponseDto(gym, request.getGymBookmarkCnt());
        return new ResponseEntity<>(response,HttpStatus.CREATED);

    }



    //     헬스장 정보 수정
    @PatchMapping("/{gym_id}")
    @RolesAllowed({"ROLE_OWNER"})
    public ResponseEntity patchGym(@RequestPart("request") GymDto.Patch patchRequest,
                                   @RequestPart("files") List<MultipartFile> files,
                                   @PathVariable("gym_id") Long gymId,
                                   @AuthMember Long memberId) throws IOException {
        patchRequest.setGymId(gymId);
        gymService.updateGym(patchRequest,files);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    // 헬스장 상세조회
    @GetMapping("/{gym_id}")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity getGym(@PathVariable("gym_id") @Positive Long gymId) {

        GymDto.Response response = gymService.findGym(gymId);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
     //헬스장 시설별 조회
//    @GetMapping("facility/{facility_id}")
//    @RolesAllowed("ROLE_USER")
//    public ResponseEntity facilityGyms(@PathVariable("facility_id") Long facilityId,
//                                       @AuthMember Long gymId){
//        List<Gym> facilityGyms = gymService.findFacilityGyms(facilityId);
//        List<GymDto.Response> response = mapper.gymsToGymResponseDtos(facilityGyms);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//
//    }



//    // 헬스장 전체조회
//    @GetMapping
//    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
//    public ResponseEntity getGyms(@PageableDefault(size=15, direction = Sort.Direction.DESC) Pageable pageable) {
//        // (7)
////        List<Gym> response = gymService.findGyms();
////        return new ResponseEntity<>(response, HttpStatus.OK);
//        Page<Gym> gymPage = gymService.gymsPage(pageable);
//        List<Gym> gyms = gymPage.getContent();
//        List<GymDto.ListResponse> response = mapper.gymsToGymResponseDtos(gyms);
//        return new ResponseEntity<>(response,HttpStatus.OK);
//    }
//
    //헬스장 전체 조회
    @GetMapping
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity getAllGym(@AuthMember Long memberId,
                                    @RequestParam String filter,
                                    @RequestParam Double latitude,
                                    @RequestParam Double longitude) {
        log.info("## filter : {}", filter);
        log.info("## latitude : {}", latitude);
        log.info("## longitude : {}", longitude);
        List<GymDto.GymInfo> response = gymService.findFilteredGymList(memberId, latitude, longitude, filter);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 헬스장 필터링
//    @GetMapping("/filters")
//    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
//    public ResponseEntity getFilteredGymList (@AuthMember Long memberId,
//                                    @RequestParam String filter,
//                                    @RequestParam Double latitude,
//                                    @RequestParam Double longitude) {
//        log.info("## filter : {}", filter);
//        log.info("## latitude : {}", latitude);
//        log.info("## longitude : {}", longitude);
//        List<GymDto.GymInfo> response = gymService.findFilteredGymList(memberId, latitude, longitude, filter);
//
//        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
//    }



    @DeleteMapping("/{gym_id}")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity deleteGym(@PathVariable("gym_id") @Positive Long gymId,
                                    @AuthMember Long memberId) {
        System.out.println("# deleted gymId: " + gymId);
        // No need business logic
        gymService.deleteGym(gymId,memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    // 헳스장 찜 생성
    @PostMapping("/bookmarks/{gym_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity addGymBookmark(@AuthMember Long memberId,
                                         @PathVariable("gym_id") Long gymId) {
        gymBookmarkService.addGymBookmark(memberId, gymId);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
