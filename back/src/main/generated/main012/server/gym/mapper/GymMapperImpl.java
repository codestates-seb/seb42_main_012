package main012.server.gym.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.gym.dto.GymDto.ListResponse;
import main012.server.gym.dto.GymDto.Patch;
import main012.server.gym.entity.Gym;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-27T15:08:55+0900",
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

        gym.setId( gymPatchDto.getId() );
        gym.setGymName( gymPatchDto.getGymName() );
        gym.setAddress( gymPatchDto.getAddress() );
        gym.setPhoneNumber( gymPatchDto.getPhoneNumber() );
        gym.setBusinessHours( gymPatchDto.getBusinessHours() );

        return gym;
    }

    @Override
    public List<ListResponse> gymsToGymResponseDtos(List<Gym> gyms) {
        if ( gyms == null ) {
            return null;
        }

        List<ListResponse> list = new ArrayList<ListResponse>( gyms.size() );
        for ( Gym gym : gyms ) {
            list.add( gymToListResponse( gym ) );
        }

        return list;
    }

    protected ListResponse gymToListResponse(Gym gym) {
        if ( gym == null ) {
            return null;
        }

        ListResponse listResponse = new ListResponse();

        return listResponse;
    }
}
