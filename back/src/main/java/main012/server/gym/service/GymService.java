package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.gym.dto.GymDto;
import main012.server.gym.dto.GymWithDistance;
import main012.server.gym.entity.Facility;
import main012.server.gym.entity.Gym;
import main012.server.gym.mapper.GymMapper;
import main012.server.gym.repository.FacilityRepository;
import main012.server.gym.repository.GymBookmarkRepository;
import main012.server.gym.repository.GymImageRepo;
import main012.server.gym.repository.GymRepository;
import main012.server.image.entity.GymImage;
import main012.server.image.entity.Image;
import main012.server.image.repository.ImageRepository;
import main012.server.image.service.ImageService;
import main012.server.user.entity.Member;
import main012.server.user.mapper.MemberMapper;
import main012.server.user.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class GymService {
    @Value("${mail.address.admin}")
    private String adminEmail;
    @Autowired
    private final GymRepository gymRepository;
    private final GymMapper gymMapper;
    private final FacilityRepository facilityRepository;
    private final ImageService imageService;
    private final GymImageRepo gymImageRepo;
    private final GymBookmarkRepository gymBookmarkRepository;
    private final ImageRepository imageRepository;
    private final int size = 15;
    private final PageRequest pageable = PageRequest.of(0, size);
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;


    public void createGym(GymDto.Post request, List<MultipartFile> files, Long memberId) throws IOException {

        verifyExistsGymName(request.getGymName());
        Gym gym = gymMapper.gymPostDtoToGym(request, request.getGymBookmarkCnt());
        log.info("## 짐 생성 완료 / gymId : {}", gym.getId());

        List<Facility> facilities = request.getFacilityIdList().stream()
                .map(id -> findFacility(id))
                .collect(Collectors.toList());

        gym.setFacilities(facilities);
        log.info("## 짐 시설 등록 완료");
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));
        gym.setMember(member);

        Gym response = gymRepository.save(gym);
        List<Image> uploadedImages = null;
        if (!files.isEmpty()) {
            uploadedImages = imageService.upload(files, "upload");
        }

        createGymImage(gym, uploadedImages);
        log.info("## 짐 이미지 등록 완료");


        gymRepository.save(gym);
    }

    // 짐 이미지 등록 기능
    private void createGymImage(Gym gym, List<Image> imageList) {
        for (Image image : imageList) {
            GymImage gymImage = new GymImage(gym, image);
            gym.setGymImage(gymImage);
        }
    }

    // 헬스장 시설 조회
    private Facility findFacility(Long id) {
        return facilityRepository.findById(id)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.FACILITY_NOT_FOUND));
    }


    /**
     * 헬스장 수정
     */
    public void updateGym(GymDto.Patch request, List<MultipartFile> files, Long gymId, Long memberId) throws IOException {
        // 존재하는 헬스장인지 검증
        Gym gym = findVerifiedGym(gymId);
        log.info("## 헬스장 수정 : {}", gymId);

        if (gym.getMember().getId() != memberId) {
            log.warn("## 다른 사람이 헬스장 수정하려고 함");
            throw new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND);
        }

        gym.setGymName(request.getGymName());
        gym.setAddress(request.getAddress());
        gym.setPhoneNumber(request.getPhoneNumber());
        gym.setBusinessHours(request.getBusinessHours());
        gym.setPrice(request.getPrice());
        gym.setDetailPrices(request.getDetailPrices());
        gym.setLatitude(request.getLatitude());
        gym.setLongitude(request.getLongitude());

        List<Long> deletedGymImageId = request.getDeletedGymImageId();
        for (Long deletedId : deletedGymImageId) {
            gymImageRepo.findById(deletedId)
                    .ifPresent(gymImage -> {
                            imageService.remove(gymImage.getImage());
                            gymImageRepo.delete(gymImage);
                    });
        }
        log.info("## 헬스장 이미지 삭제 완료");


        List<Facility> facilities = request.getFacilityIdList().stream()
                .map(id -> findFacility(id))
                .collect(Collectors.toList());
        gym.setFacilities(facilities);
        log.info("## 헬스장 시설 수정 완료");


        if (!files.isEmpty()) {
           List<Image> uploadedImages = imageService.upload(files, "upload");
           createGymImage(gym, uploadedImages);
        }
        log.info("## 헬스장 이미지 수정 완료");
    }

    /**
     * 헬스장 상세 조회
     */
    public GymDto.Response findGym(Long gymId, Long memberId) {
        Gym findGym = findVerifiedGym(gymId);

        int gymBookmarkCnt = findGym.getGymBookmarks().size();
        Boolean isBookmarked = gymBookmarkRepository.findByMemberIdAndGymId(memberId, gymId).isPresent();

        GymDto.Response response = gymMapper.gymToGymResponseDto(findGym, gymBookmarkCnt, isBookmarked);

        return response;
    }


    /**
     * 헬스장 필터링 목록
     */
    public List<GymDto.GymInfo> findFilteredGymList(Long memberId, Double latitude, Double longitude, String filter) {
        List<Gym> all = gymRepository.findAll();
        List<GymWithDistance> gymInFiveKiloMeter = new ArrayList<>();

        all.stream()
                .forEach(gym -> {
                    Double result = gym.distanceMeter(latitude, longitude);
                    if (result <= 5000) {
                        double avgGymGrade = getAvgGymGrade(gym);
                        int size = gym.getGymBookmarks().size();
                        GymWithDistance gymWithDistance = new GymWithDistance(gym, result, avgGymGrade, size);
                        gymInFiveKiloMeter.add(gymWithDistance);
                        log.info("## gymId : {} , distance : {}", gym.getId(), result);
                        log.info("## gymId : {} , avg : {}", gym.getId(), avgGymGrade);
                        log.info("## gymId : {} , bookmarkCnt : {}", gym.getId(), size);
                    }
                });

        List<Gym> contents = new ArrayList<>();

        if (filter.equals("grade")) {
            contents = gymInFiveKiloMeter.stream()
                    .sorted(Comparator.comparing(GymWithDistance::getAvgGymGrade).reversed())
                    .map(gymWithDistance -> gymWithDistance.getGym())
                    .collect(Collectors.toList());
            log.info("## 평점순 목록 조회");
        } else if (filter.equals("bookmark")) {
            contents = gymInFiveKiloMeter.stream()
                    .sorted(Comparator.comparing(GymWithDistance::getBookmarkSize).reversed())
                    .map(gymWithDistance -> gymWithDistance.getGym())
                    .collect(Collectors.toList());
            log.info("## 찜순 목록 조회");
        } else {
            contents = gymInFiveKiloMeter.stream()
                    .sorted(Comparator.comparing(GymWithDistance::getDistance))
                    .map(gymWithDistance -> gymWithDistance.getGym())
                    .collect(Collectors.toList());
            log.info("## 거리순 목록 조회");
        }

        List<GymDto.GymInfo> responses = new ArrayList<>();
        contents.stream()
                .forEach(gym -> {
                    Boolean isBookmarked = gymBookmarkRepository.findByMemberIdAndGymId(memberId, gym.getId())
                            .isPresent();
                    GymDto.GymInfo response = gymMapper.gymToGimInfo(gym, isBookmarked);
                    responses.add(response);
                });
        log.info("## 헬스장 목록 반환");
        return responses;
    }

    // 헬스장별 평균 평점 구하기
    private double getAvgGymGrade(Gym gym) {
        OptionalDouble average = gym.getGymReviews().stream()
                .mapToLong(gymReview -> gymReview.getGymGrade())
                .average();

        return average.orElse(0);
    }


    // cursor 커서 얻기
    private Long getNextCursor(List<Gym> contents, int totalElements) {
        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getId();
        }
        return nextCursor;
    }
//
//    private List<Gym> getGyms(Long id, Pageable page) {
//        return id == null ?
//                this.gymRepository.findAllByOrderByIdDesc(page) :
//                this.gymRepository.findByIdLessThanOrderByIdDesc(id,page);
//    }

    private Boolean hasNext(Long id) {
        if (id == null) return false;
        return this.gymRepository.existsByIdLessThan(id);
    }

    // 특정 헬스장 삭제
    public void deleteGym(Long gymId, Long memberId) {
        Gym findGym = findVerifiedGym(gymId);
        Member member = memberRepository.findById(gymId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));

        if (member.getEmail().equals(adminEmail) || findGym.getMember().getId() == memberId) {
            gymRepository.delete(findGym);
        } else throw new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND);

        List<GymImage> gymImageList = gymImageRepo.findByGymId(gymId);


        // 사진삭제
        for (GymImage value : gymImageList) {
            imageService.remove(value.getImage());
            gymImageRepo.delete(value);
        }


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
// 페이지네이션 feedId 검증

    // 페이지네이션 feedId 검증
    private Long getFeedId(String lastFeedId) {
        Long feedId;
        if (lastFeedId.isEmpty()) {
            feedId = 9223372036854775807L;
        } else if (!lastFeedId.matches("[+-]?\\d+")) {
            throw new BusinessLoginException(ExceptionCode.REQUEST_NOT_SUPPORT);
        } else {
            feedId = Long.valueOf(lastFeedId);
        }
        return feedId;
    }

    // 게시글 등록시 파일이 비었는지 확인
    private boolean checkEmptyFile(List<MultipartFile> files) {
        for (MultipartFile multipartFile : files) {
            if (multipartFile.isEmpty()) return true;
        }
        return false;
    }


}
