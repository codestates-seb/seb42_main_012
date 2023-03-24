package main012.server.gym.controller;

import lombok.RequiredArgsConstructor;
import main012.server.auth.resolver.AuthMember;
import main012.server.common.dto.SingleResponseDto;
import main012.server.gym.dto.GymBookmarkDto;
import main012.server.gym.dto.GymDto;

import main012.server.gym.entity.Facility;
import main012.server.gym.entity.Gym;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.repository.FacilityRepository;
import main012.server.gym.service.GymBookmarkService;
import main012.server.gym.service.GymService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;

import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/gyms")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class GymController {
    private final GymBookmarkService gymBookmarkService;
    private final GymService gymService;
    private final GymMapper mapper;
    private final FacilityRepository facilityRepository;
    private static final int DEFAULT_SIZE = 15;// 커서 페이지네이션




    // 헬스장 등록
    @PostMapping
    @RolesAllowed("ROLE_OWNER")
    public ResponseEntity postGym(@RequestBody GymDto.Post gymPostDto,
                                        @AuthMember Long memberId) {
        Gym gym = mapper.gymPostDtoToGym(gymPostDto, memberId);
        Facility facility = facilityRepository.findById(gymPostDto.getFacilityId()).orElseThrow(() -> new RuntimeException("존재하지 않는 시설"));
        gym.setFacility(facility);
        gymService.createGym(gym);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }



    //     헬스장 정보 수정
    @PatchMapping("/{gym_id}")
    @RolesAllowed({"ROLE_OWNER"})

    public ResponseEntity patchGym(@PathVariable("gym_id") @Positive Long id,
                                   @Valid @RequestBody GymDto.Patch gymPatchDto) {
        gymPatchDto.setId(id);

        Gym response =
                gymService.updateGym(mapper.gymPatchDtoToGym(gymPatchDto));

        return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.OK);
    }


    // 헬스장 상세조회
    @GetMapping("/{gym_id}")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})

    public ResponseEntity getGym(@PathVariable("gym_id") @Positive long gymId) {

        Gym response = gymService.findGym(gymId);
        {
            return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.OK);
        }

    }
    // 헬스장 시설별 조회
    @GetMapping("facility/{facility_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity facilityGyms(@PathVariable("facility_id") Long facilityId,
                                       @AuthMember Long gymId){
        List<Gym> facilityGyms = gymService.findFacilityGyms(facilityId);
        List<GymDto.Response> response = mapper.gymsToGymResponseDtos(facilityGyms);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }



    // 헬스장 전체조회
    @GetMapping
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity getGyms(@PageableDefault(size=15, direction = Sort.Direction.DESC) Pageable pageable) {
        // (7)
//        List<Gym> response = gymService.findGyms();
//        return new ResponseEntity<>(response, HttpStatus.OK);
        Page<Gym> gymPage = gymService.gymsPage(pageable);
        List<Gym> gyms = gymPage.getContent();
        List<GymDto.Response> response = mapper.gymsToGymResponseDtos(gyms);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
//

    //
    @DeleteMapping("/{gym_id}")
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity deleteGym(@PathVariable("gym_id") @Positive long gymId) {
        System.out.println("# deleted gymId: " + gymId);
        // No need business logic
        gymService.deleteGym(gymId);

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
