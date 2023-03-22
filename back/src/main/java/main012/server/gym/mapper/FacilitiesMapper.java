package main012.server.gym.mapper;

import main012.server.gym.dto.FacilitiesDto;
import main012.server.gym.entity.Facilities;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FacilitiesMapper {
    Facilities facilitiesPostToFacilities(FacilitiesDto.Post facilitiesPostDto);
    Facilities facilitiesPatchToFacilities(FacilitiesDto.Patch facilitiesPatchDto);
    FacilitiesDto.Response facilitiesToFacilitiesResponse(Facilities facilities);



}
