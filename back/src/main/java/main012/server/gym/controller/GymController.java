package main012.server.gym.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymPostDto;
import main012.server.gym.dto.GymResponseDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.service.GymService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import javax.validation.constraints.Positive;
import java.util.List;




@RestController
@RequestMapping("/gyms")
@Component
public class GymController {
    private final GymService gymService;
    private final GymMapper mapper;

    public GymController(GymService gymService, GymMapper mapper) {
        this.gymService = gymService;
        this.mapper = mapper;
    }


    @PostMapping
    public ResponseEntity postGym(@Valid @RequestBody GymPostDto gymPostDto) {
        Gym gym = mapper.gymPostDtoToGym(gymPostDto);
        gymService.createGym(gym);
        return new ResponseEntity(HttpStatus.CREATED);
    }


    //     헬스장 정보 수정
    @PatchMapping("/{gym_id}")
    public ResponseEntity patchGym(@PathVariable("gym_id") @Positive long gymId,
                                   @Valid @RequestBody GymPatchDto gymPatchDto) {
        gymPatchDto.setGymId(gymId);

        Gym response =
                gymService.updateGym(mapper.gymPatchDtoToGym(gymPatchDto));

        return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.OK);
    }


    // 헬스장 상세조회
    @GetMapping("/{gym_id}")
    public ResponseEntity getGym(@PathVariable("gym_id") @Positive long gymId) {

        Gym response = gymService.findGym(gymId);
        {
            return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.OK);
        }

    }

    //헬스장 목록 조회
    @GetMapping
    public ResponseEntity getGyms() {
        // (7)
        List<Gym> response = gymService.findGyms();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{gym_id}")
    public ResponseEntity deleteGym(@PathVariable("gym_id") @Positive long gymId) {
        System.out.println("# deleted gymId: " + gymId);
        // No need business logic
        gymService.deleteGym(gymId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
