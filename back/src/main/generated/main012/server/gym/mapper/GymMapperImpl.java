package main012.server.gym.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.gym.dto.GymDto.GymImage;
import main012.server.gym.dto.GymDto.Patch;
import main012.server.gym.dto.GymDto.Response;
import main012.server.gym.entity.Gym;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-27T11:09:46+0900",
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
    public List<Response> gymsToGymResponseDtos(List<Gym> gyms) {
        if ( gyms == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( gyms.size() );
        for ( Gym gym : gyms ) {
            list.add( gymToResponse( gym ) );
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

    protected Response gymToResponse(Gym gym) {
        if ( gym == null ) {
            return null;
        }

        String gymName = null;
        List<GymImage> gymImages = null;
        String address = null;
        String phoneNumber = null;
        String price = null;
        String detailPrices = null;
        String businessHours = null;

        gymName = gym.getGymName();
        gymImages = gymImageListToGymImageList( gym.getGymImages() );
        address = gym.getAddress();
        phoneNumber = gym.getPhoneNumber();
        price = gym.getPrice();
        detailPrices = gym.getDetailPrices();
        businessHours = gym.getBusinessHours();

        Long memberId = null;
        Long gymId = null;
        List<String> facilityName = null;
        Long gymBookmarkCnt = null;

        Response response = new Response( memberId, gymId, gymName, gymImages, address, phoneNumber, price, detailPrices, businessHours, facilityName, gymBookmarkCnt );

        return response;
    }
}
