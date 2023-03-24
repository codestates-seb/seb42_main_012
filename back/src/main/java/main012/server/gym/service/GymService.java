package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import main012.server.cursor.CursorResult;
import main012.server.gym.dto.GymDto;
import main012.server.gym.entity.Gym;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.gym.repository.FacilityRepository;
import main012.server.gym.repository.GymRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
@RequiredArgsConstructor

public class GymService {
    @Autowired
    private final GymRepository gymRepository;
    private final FacilityRepository facilityRepository;


    // 헬스장 생성
    public Gym createGym(Gym gym) {

        return gymRepository.save(gym);
    }

    // 헬스장 시설 별 조회 기능
    public List<Gym> findFacilityGyms(Long facilityId) {
        List<Gym> response = gymRepository.findAllByFacilityId(facilityId);
        return response;
    }




    // 헬스장 수정
    public Gym updateGym(Gym gym) {
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
        Optional.ofNullable(gym.getFacility().getFacilityName())
                .ifPresent(facilityId -> findGym.getFacility().setFacilityName(facilityId));

        return gymRepository.save(findGym);
    }

    // 상세 헬스장 조회
    public Gym findGym(long gymId) {
        return findVerifiedGym(gymId);
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
    public void deleteGym(long gymId){
        Gym findGym = findVerifiedGym(gymId);
        gymRepository.delete(findGym);

    }
    // 이미 존재하는 헬스장인지 검증
    public Gym findVerifiedGym(long id) {
        Optional<Gym> optionalGym =
                gymRepository.findById(id);
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
