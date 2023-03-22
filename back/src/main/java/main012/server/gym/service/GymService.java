package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import main012.server.gym.entity.Gym;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
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


    public Gym createGym(Gym gym) {
        // 등록된 헬스장인지 검증
        return gymRepository.save(gym);
    }


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
    // 특정 헬스장 삭제
    public void deleteGym(long gymId){
        Gym findGym = findVerifiedGym(gymId);
        gymRepository.delete(findGym);

    }
    // 이미 존재하는 헬스장인지 검증
    public Gym findVerifiedGym(long gymId) {
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

}
