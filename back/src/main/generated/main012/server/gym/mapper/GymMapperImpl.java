package main012.server.gym.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.gym.dto.GymDto.AllGyms;
import main012.server.gym.dto.GymDto.AllGyms.AllGymsBuilder;
import main012.server.gym.dto.GymDto.GymImage;
import main012.server.gym.dto.GymDto.Patch;
import main012.server.gym.entity.Gym;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-28T01:38:41+0900",
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

    @Override
    public List<AllGyms> gymToGymInfos(List<Gym> gyms) {
        if ( gyms == null ) {
            return null;
        }

        List<AllGyms> list = new ArrayList<AllGyms>( gyms.size() );
        for ( Gym gym : gyms ) {
            list.add( gymToAllGyms( gym ) );
        }

        return list;
    }

    protected GymImage gymImageToGymImage(main012.server.image.entity.GymImage gymImage) {
        if ( gymImage == null ) {
            return null;
        }

        Long gymImageId = null;
        String gymImageUrl = null;

        GymImage gymImage1 = new GymImage( gymImageId, gymImageUrl );

        return gymImage1;
    }

    protected List<GymImage> gymImageListToGymImageList(List<main012.server.image.entity.GymImage> list) {
        if ( list == null ) {
            return null;
        }

        List<GymImage> list1 = new ArrayList<GymImage>( list.size() );
        for ( main012.server.image.entity.GymImage gymImage : list ) {
            list1.add( gymImageToGymImage( gymImage ) );
        }

        return list1;
    }

    protected AllGyms gymToAllGyms(Gym gym) {
        if ( gym == null ) {
            return null;
        }

        AllGymsBuilder allGyms = AllGyms.builder();

        allGyms.gymName( gym.getGymName() );
        allGyms.gymImages( gymImageListToGymImageList( gym.getGymImages() ) );
        allGyms.address( gym.getAddress() );
        allGyms.phoneNumber( gym.getPhoneNumber() );
        allGyms.price( gym.getPrice() );
        allGyms.detailPrices( gym.getDetailPrices() );
        allGyms.businessHours( gym.getBusinessHours() );

        return allGyms.build();
    }
}
