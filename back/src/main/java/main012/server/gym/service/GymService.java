package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.cursor.CursorResult;
import main012.server.gym.dto.GymDto;
import main012.server.gym.entity.Facility;
import main012.server.gym.entity.Gym;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.repository.FacilityRepository;
import main012.server.gym.repository.GymBookmarkRepository;
import main012.server.gym.repository.GymRepository;
import main012.server.image.entity.GymImage;
import main012.server.image.entity.Image;
import main012.server.image.service.ImageService;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.plaf.BorderUIResource;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class GymService {
    @Autowired
    private final GymRepository gymRepository;
    private final GymMapper gymMapper;
    private final FacilityRepository facilityRepository;
    private final ImageService imageService;
    private final GymBookmarkRepository gymBookmarkRepository;


    // 헬스장 생성
    public Gym createGym(GymDto.Post request, List<MultipartFile> files) throws IOException {

        Gym gym = gymMapper.gymPostDtoToGym(request);
        log.info("## 짐 생성 완료 / gymId : {}", gym.getId());

        List<Facility> facilities = request.getFacilityIdList().stream()
                .map(id -> findFacility(id))
                .collect(Collectors.toList());

        gym.setFacilities(facilities);
        log.info("## 짐 시설 등록 완료");


        List<Image> uploadedImages = null;
        if (!files.isEmpty()) {
            uploadedImages = imageService.upload(files, "upload");
        }

        createGymImage(gym, uploadedImages);
        log.info("## 짐 이미지 등록 완료");

        return gymRepository.save(gym);
    }

    // 짐 이미지 등록 기능
    private void createGymImage(Gym gym, List<Image> imageList) {
        for (Image image : imageList) {
            GymImage gymImage = new GymImage(gym, image);
            gym.setGymImage(gymImage);
        }
    }

    // 헬스장 시설 조회
    private Facility findFacility(Long facilityId) {
        return facilityRepository.findById(facilityId)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.FACILITY_NOT_FOUND));
    }

    // 헬스장 수정
    public GymDto.Response updateGym(Gym gym) {
        // 존재하는 헬스장인지 검증
        Gym findGym = findVerifiedGym(gym.getId());

        Optional.ofNullable(gym.getGymName())
                .ifPresent(gymName -> findGym.setGymName(gymName));
        Optional.ofNullable(gym.getAddress())
                .ifPresent(address -> findGym.setAddress(address));
        Optional.ofNullable(gym.getPhoneNumber())
                .ifPresent(phoneNumber -> findGym.setPhoneNumber(phoneNumber));
        Optional.ofNullable(gym.getBusinessHours())
                .ifPresent(businessHours -> findGym.setBusinessHours(businessHours));

        Long gymBookmarkCnt = gymBookmarkRepository.countByGymId(findGym.getId());

        GymDto.Response response = gymMapper.gymToGymResponseDto(gym, gymBookmarkCnt);

        return response;
    }

    // 상세 헬스장 조회
    public GymDto.Response findGym(Long gymId) {
        Gym findGym = findVerifiedGym(gymId);

        Long gymBookmarkCnt = gymBookmarkRepository.countByGymId(findGym.getId());

        GymDto.Response response = gymMapper.gymToGymResponseDto(findGym, gymBookmarkCnt);

        return response;
    }

    // 모든 헬스장 정보 조회
    public Page<Gym> gymsPage(Pageable pageable) {

        return gymRepository.findAll(pageable);
    }

    // cursor 방식 조회
    public CursorResult<Gym> get(Long cursorId, Pageable page) {
        final List<Gym> gyms = getGyms(cursorId,page);
        final Long lastIdOfList = gyms.isEmpty() ?
                null : gyms.get(gyms.size() - 1).getId();

        return new CursorResult<>(gyms,hasNext(lastIdOfList));
    }

    private List<Gym> getGyms(Long id, Pageable page) {
        return id == null ?
                this.gymRepository.findAllByOrderByIdDesc(page) :
                this.gymRepository.findByIdLessThanOrderByIdDesc(id,page);
    }

    private Boolean hasNext(Long id) {
        if (id == null) return false;
        return this.gymRepository.existsByIdLessThan(id);
    }

    // 특정 헬스장 삭제
    public void deleteGym(Long gymId){
        Gym findGym = findVerifiedGym(gymId);
        gymRepository.delete(findGym);

    }
    // 이미 존재하는 헬스장인지 검증
    public Gym findVerifiedGym(Long gymId) {
        Optional<Gym> optionalGym =
                gymRepository.findById(gymId);
        Gym findGym =
                optionalGym.orElseThrow(() ->
                        new BusinessLoginException(ExceptionCode.GYM_NOT_FOUND));
        return findGym;
    }

    // 이미 등록된 이름인지 검증
    private void verifyExistsGymName(String gymName) {
        Optional<Gym> gym = gymRepository.findByGymName(gymName);
        if (gym.isPresent())
            throw new BusinessLoginException(ExceptionCode.GYM_EXISTS);
    }

//    // 헬스장 찜 페이지
//    @Transactional
//    public Page<Gym> gymBookmarkCnt(Gym.KindOfGym kindOfGym, Pageable pageable) {
//        Page<Gym> gymPage = gymRepository.findAllByKindOfGymName(kindOfGym, pageable);
//        return gymPage;
//    }






}
