package main012.server.gym.controller;

import lombok.RequiredArgsConstructor;
import main012.server.auth.resolver.AuthMember;
import main012.server.common.dto.MultiResponseDto;
import main012.server.gym.dto.GymBookmarkDto;
import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymPostDto;
import main012.server.gym.dto.GymResponseDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.service.GymBookmarkService;
import main012.server.gym.service.GymService;
import main012.server.user.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

import static javax.swing.GroupLayout.DEFAULT_SIZE;


@RestController
@RequestMapping("/gyms")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class GymController {
    private final GymBookmarkService gymBookmarkService;
    private final GymService gymService;
    private final GymMapper mapper;
    private static final int DEFAULT_SIZE = 15;// 커서 페이지네이션



    @PostMapping
    @RolesAllowed({"ROLE_OWNER"})
    public ResponseEntity postGym(@Valid @RequestBody GymPostDto gymPostDto,
                                  @AuthMember Long memberId) {
        Gym gym = mapper.gymPostDtoToGym(gymPostDto,memberId);
        Gym createGym = gymService.createGym(gym);
        GymResponseDto response = mapper.gymToGymResponseDto(createGym);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    //     헬스장 정보 수정
    @PatchMapping("/{gym_id}")
    @RolesAllowed({"ROLE_OWNER"})

    public ResponseEntity patchGym(@PathVariable("gym_id") @Positive Long id,
                                   @Valid @RequestBody GymPatchDto gymPatchDto) {
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

    //    //헬스장 목록 조회
//    @GetMapping
//    public CursorResult<Gym> getGyms(Long cursorId, Integer size) {
//        if (size == null) size = DEFAULT_SIZE;
//        return this.gymService.get(cursorId, PageRequest.of(0,size));
//    }
    @GetMapping
    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
    public ResponseEntity getGyms(@PageableDefault(size=15, direction = Sort.Direction.DESC) Pageable pageable) {
        // (7)
//        List<Gym> response = gymService.findGyms();
//        return new ResponseEntity<>(response, HttpStatus.OK);
        Page<Gym> gymPage = gymService.gymsPage(pageable);
        List<Gym> gyms = gymPage.getContent();
        List<GymResponseDto> response = mapper.gymsToGymResponseDtos(gyms);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

//    // 커서기반
//    @GetMapping
//    @RolesAllowed({"ROLE_USER", "ROLE_OWNER"})
//    public CursorResult<Gym> getGyms(Long cursorId, Integer size) {
//        if (size == null) size = DEFAULT_SIZE;
//        return this.gymService.get(cursorId, PageRequest.of(0, size));
//    }
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
    @PostMapping("/bookmarks/{gym_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity addGymBookmark(@AuthMember Long memberId,
                                         @PathVariable("gym_id") Long gymId){
        gymBookmarkService.addGymBookmark(memberId, gymId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
