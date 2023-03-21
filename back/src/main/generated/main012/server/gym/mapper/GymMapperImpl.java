package main012.server.gym.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.gym.dto.GymPatchDto;
import main012.server.gym.dto.GymPostDto;
import main012.server.gym.dto.GymResponseDto;
import main012.server.gym.entity.Gym;
import org.springframework.stereotype.Component;


@Component
public class GymMapperImpl implements GymMapper {

    @Override
    public Gym gymPostDtoToGym(GymPostDto gymPostDto) {
        if ( gymPostDto == null ) {
            return null;
        }

        Gym gym = new Gym();

        gym.setGymName( gymPostDto.getGymName() );
        gym.setAddress( gymPostDto.getAddress() );
        gym.setPhoneNumber( gymPostDto.getPhoneNumber() );
        gym.setBusinessHours( gymPostDto.getBusinessHours() );
        if ( gymPostDto.getLatitude() != null ) {
            gym.setLatitude( gymPostDto.getLatitude() );
        }
        if ( gymPostDto.getLongitude() != null ) {
            gym.setLongitude( gymPostDto.getLongitude() );
        }

        return gym;
    }

    @Override
    public Gym gymPatchDtoToGym(GymPatchDto gymPatchDto) {
        if ( gymPatchDto == null ) {
            return null;
        }

        Gym gym = new Gym();

        gym.setGymId( gymPatchDto.getGymId() );
        gym.setGymName( gymPatchDto.getGymName() );
        gym.setAddress( gymPatchDto.getAddress() );
        gym.setPhoneNumber( gymPatchDto.getPhoneNumber() );
        gym.setBusinessHours( gymPatchDto.getBusinessHours() );
        if ( gymPatchDto.getLatitude() != null ) {
            gym.setLatitude( gymPatchDto.getLatitude() );
        }
        if ( gymPatchDto.getLongitude() != null ) {
            gym.setLongitude( gymPatchDto.getLongitude() );
        }

        return gym;
    }

    @Override
    public GymResponseDto gymToGymResponseDto(Gym gym) {
        if ( gym == null ) {
            return null;
        }

        long gymId = 0L;
        String gymName = null;
        String address = null;
        String phoneNumber = null;
        String businessHours = null;
        Double latitude = null;
        Double longitude = null;

        if ( gym.getGymId() != null ) {
            gymId = gym.getGymId();
        }
        gymName = gym.getGymName();
        address = gym.getAddress();
        phoneNumber = gym.getPhoneNumber();
        businessHours = gym.getBusinessHours();
        latitude = gym.getLatitude();
        longitude = gym.getLongitude();

        GymResponseDto gymResponseDto = new GymResponseDto( gymId, gymName, address, phoneNumber, businessHours, latitude, longitude );

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
