package main012.server.gym.controller;

import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymPostDto;
import main012.server.gym.dto.GymResponseDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.service.GymService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/gyms")
public class GymController {
    private final GymService gymService;
    private final GymMapper mapper;

    public GymController(GymService gymService, GymMapper mapper) {
        this.gymService = gymService;
        this.mapper = mapper;
    }
    // 헬스장 등록
    // 여기에 나머지 폰넘버랑 다른거 작성해야함
    @PostMapping
    public ResponseEntity postGym(@Valid @RequestBody GymPostDto gymPostDto) {
        Gym gym = mapper.gymPostDtoToGym(gymPostDto);

        Gym response = gymService.createGym(gym);

        return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.CREATED);
    }

    // 헬스장 정보 수정
    @PatchMapping("/gym_id")
    public ResponseEntity patchGym(@PathVariable("gym_id") @Min(1) long gymId,
                                   @Valid @RequestBody GymPatchDto gymPatchDto){
        gymPatchDto.setGymId(gymId);

        Gym response = gymService.updateGym(mapper.gymPatchDtoToGym(gymPatchDto));
        return new ResponseEntity<>(mapper.gymToGymResponseDto(response), HttpStatus.OK);
    }

    // 헬스장 상세조회
    @GetMapping("/{gym_id}")
    public ResponseEntity getGym(@PathVariable("gym_id") @Positive long gymId) {
        Gym response = gymService.findGym(gymId);

        return new ResponseEntity<>(mapper.gymToGymResponseDto(response),HttpStatus.OK);
    }

    // 헬스장 전체조회
    @GetMapping
    public ResponseEntity getGyms() {
        List<Gym> gyms = gymService.findGyms();
        List<GymResponseDto> response =
                gyms.stream().map(gym -> mapper.gymToGymResponseDto(gym))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    // 헬스장 정보 삭제
    @DeleteMapping("/{gym_id}")
    public ResponseEntity deleteGym(@PathVariable("gym_id") long gymId){
        System.out.println("# delete Gym");
        gymService.deleteGym(gymId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
