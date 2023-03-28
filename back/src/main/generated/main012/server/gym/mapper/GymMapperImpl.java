package main012.server.gym.mapper;

import javax.annotation.processing.Generated;
import main012.server.gym.dto.GymDto.Patch;
import main012.server.gym.entity.Gym;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-28T13:24:41+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class GymMapperImpl implements GymMapper {

    @Override
    public Gym gymPatchDtoToGym(Patch gymPatchDto) {
        if ( gymPatchDto == null ) {
            return null;
        }

        Gym gym = new Gym();

        gym.setGymName( gymPatchDto.getGymName() );
        gym.setAddress( gymPatchDto.getAddress() );
        gym.setPhoneNumber( gymPatchDto.getPhoneNumber() );
        gym.setBusinessHours( gymPatchDto.getBusinessHours() );
        gym.setPrice( gymPatchDto.getPrice() );
        gym.setDetailPrices( gymPatchDto.getDetailPrices() );
        gym.setLatitude( gymPatchDto.getLatitude() );
        gym.setLongitude( gymPatchDto.getLongitude() );

        return gym;
    }
}
