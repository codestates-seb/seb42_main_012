package main012.server.gym.mapper;

import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymPostDto;
import main012.server.gym.dto.GymResponseDto;
import main012.server.gym.entity.Gym;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface GymMapper {
    Gym gymPostDtoToGym(GymPostDto gymPostDto);
    Gym gymPatchDtoToGym(GymPatchDto gymPatchDto);
    GymResponseDto gymToGymResponseDto(Gym gym);
}
