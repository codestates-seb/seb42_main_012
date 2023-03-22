package main012.server.gym.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymResponseDto;
import main012.server.gym.entity.Gym;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-22T18:42:05+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class GymMapperImpl implements GymMapper {

    @Override
    public Gym gymPatchDtoToGym(GymPatchDto gymPatchDto) {
        if ( gymPatchDto == null ) {
            return null;
        }

        Gym gym = new Gym();

        gym.setId( gymPatchDto.getId() );
        gym.setGymName( gymPatchDto.getGymName() );
        gym.setAddress( gymPatchDto.getAddress() );
        gym.setPhoneNumber( gymPatchDto.getPhoneNumber() );
        gym.setBusinessHours( gymPatchDto.getBusinessHours() );

        return gym;
    }

    @Override
    public GymResponseDto gymToGymResponseDto(Gym gym) {
        if ( gym == null ) {
            return null;
        }

        Long id = null;
        String gymName = null;
        String address = null;
        String phoneNumber = null;
        String businessHours = null;

        id = gym.getId();
        gymName = gym.getGymName();
        address = gym.getAddress();
        phoneNumber = gym.getPhoneNumber();
        businessHours = gym.getBusinessHours();

        GymResponseDto gymResponseDto = new GymResponseDto( id, gymName, address, phoneNumber, businessHours );

        return gymResponseDto;
    }

    @Override
    public List<GymResponseDto> gymsToGymResponseDtos(List<Gym> gyms) {
        if ( gyms == null ) {
            return null;
        }

        List<GymResponseDto> list = new ArrayList<GymResponseDto>( gyms.size() );
        for ( Gym gym : gyms ) {
            list.add( gymToGymResponseDto( gym ) );
        }

        return list;
    }
}
