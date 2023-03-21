package main012.server.gym.controller;

import main012.server.common.dto.MultiResponseDto;
import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymPostDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.service.GymService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;

import javax.validation.constraints.Positive;
import java.util.List;



@CrossOrigin
@RestController
@RequestMapping("/gyms")
public class GymController {
    private final GymService gymService;
    private final GymMapper mapper;

    public GymController(GymService gymService, GymMapper mapper) {
        this.gymService = gymService;
        this.mapper = mapper;
    }

//    @RolesAllowed("ROLE_OWNER")
    @PostMapping
    public ResponseEntity postGym(@Valid @RequestBody GymPostDto gymPostDto) {
        Gym gym = mapper.gymPostDtoToGym(gymPostDto);
        gymService.createGym(gym);
        return new ResponseEntity(HttpStatus.CREATED);
    }


    //     헬스장 정보 수정
    @PatchMapping("/{gym_id}")
    public ResponseEntity patchGym(@PathVariable("gym_id") @Positive Long gymId,
                                   @Valid @RequestBody GymPatchDto gymPatchDto) {
        gymPatchDto.setGymId(gymId);

        Gym response =
                gymService.updateGym(mapper.gymPatchDtoToGym(gymPatchDto));

        return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.OK);
    }


    // 헬스장 상세조회
    @GetMapping("/{gym_id}")
    public ResponseEntity getGym(@PathVariable("gym_id") @Positive Long gymId) {

        Gym response = gymService.findGym(gymId);
        {
            return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.OK);
        }

    }

    //헬스장 목록 조회
    @GetMapping
    public ResponseEntity getGyms(@Positive @RequestParam int page,
                                  @Positive @RequestParam int size) {
        // (7)
//        List<Gym> response = gymService.findGyms();
//        return new ResponseEntity<>(response, HttpStatus.OK);
        Page<Gym> pageGyms = gymService.findGyms(page-1,size);
        List<Gym> gyms = pageGyms.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.gymsToGymResponseDtos(gyms),
                        pageGyms),
                HttpStatus.OK);
    }

    //
    @DeleteMapping("/{gym_id}")
    public ResponseEntity deleteGym(@PathVariable("gym_id") @Positive Long gymId) {
        System.out.println("# deleted gymId: " + gymId);
        // No need business logic
        gymService.deleteGym(gymId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
