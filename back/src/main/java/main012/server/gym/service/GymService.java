package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.gym.dto.GymDto;
import main012.server.gym.entity.Facility;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymBookmark;
import main012.server.gym.entity.GymReview;
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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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


    public Gym createGym(GymDto.Post request, List<MultipartFile> files, Long memberId) throws IOException {

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
    public Gym updateGym(GymDto.Patch patchRequest, List<MultipartFile> files) throws IOException {
        // 존재하는 헬스장인지 검증
        Gym findGym = findVerifiedGym(patchRequest.getGymId());

        Optional.ofNullable(patchRequest.getGymName())
                .ifPresent(gymName -> findGym.setGymName(gymName));
        Optional.ofNullable(patchRequest.getAddress())
                .ifPresent(address -> findGym.setAddress(address));
        Optional.ofNullable(patchRequest.getPhoneNumber())
                .ifPresent(phoneNumber -> findGym.setPhoneNumber(phoneNumber));
        Optional.ofNullable(patchRequest.getBusinessHours())
                .ifPresent(businessHours -> findGym.setBusinessHours(businessHours));
        Optional.ofNullable(patchRequest.getPrice())
                .ifPresent(price -> findGym.setPrice(price));
        Optional.ofNullable(patchRequest.getDetailPrices())
                .ifPresent(detailPrice -> findGym.setDetailPrices(detailPrice));
//        Optional.ofNullable(gym.getFacilities())
//                .ifPresent(facilityList -> findGym.setFacilities((List<Facility>) facilityRepository.findAllById(facilityList).orElseThrow(() -> new BusinessLoginException(ExceptionCode.FACILITY_NOT_FOUND))));
        Optional.ofNullable(patchRequest.getLatitude())
                .ifPresent(latitude -> findGym.setLatitude(latitude));
        Optional.ofNullable(patchRequest.getLongitude())
                .ifPresent(longitude -> findGym.setLongitude(longitude));

        boolean checkFiles = checkEmptyFile(files);

        if (checkFiles != true) {
            // 기존 사진 지우기
            for (Long value : patchRequest.getDeletedGymImageId()) {
                Image deleteImage = imageRepository.findById(value).orElseThrow(() -> new BusinessLoginException(ExceptionCode.GYM_NOT_FOUND));
                imageService.remove(deleteImage);
                List<GymImage> foundByImageId = gymImageRepo.findByImageId(value);
                for (GymImage gymImage : foundByImageId) {
                    gymImageRepo.delete(gymImage);
                }
            }
            // 새로운 사진 등록
            List<Image> uploadedImages = imageService.upload(files, "upload");
            createGymImage(findGym, uploadedImages);

        }


        return findGym;
    }

    // 상세 헬스장 조회
    public GymDto.Response findGym(Long gymId) {
        Gym findGym = findVerifiedGym(gymId);

        Long gymBookmarkCnt = gymBookmarkRepository.countByGymId(findGym.getId());

        GymDto.Response response = gymMapper.gymToGymResponseDto(findGym, gymBookmarkCnt);

        return response;
    }

    // 모든 헬스장 정보 조회
//    public Page<Gym> gymsPage(Pageable pageable) {
//
//        return gymRepository.findAll(pageable);
//    }
    public GymDto.AllGymResponse findAllGym(Long memberId, String lastFeedId) {
        Long feedId = getFeedId(lastFeedId);
        log.info("## feedId : {}", feedId);

        Page<Gym> pages = gymRepository.findByIdLessThanOrderByIdDesc(feedId, pageable);
        List<Gym> contents = pages.getContent();

        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getId();
        }

        List<GymDto.GymInfo> responses = new ArrayList<>();
        contents.stream()
                .forEach(gym -> {
                    Boolean isBookmarked = gymBookmarkRepository.findByMemberIdAndGymId(memberId, gym.getId())
                            .isPresent();
                    String gymImageUrl = null;
                    if (gym.getGymImages().size() >= 1) {
                        gymImageUrl = gym.getGymImages().get(0).getImage().getImagePath();
                    }
                    GymDto.GymInfo response = gymMapper.gymToGimInfo(gym, isBookmarked, gymImageUrl);
                    responses.add(response);
                });


        return new GymDto.AllGymResponse
                (responses, totalElements, nextCursor);

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

        if(member.getEmail().equals(adminEmail) || findGym.getMember().getId() == memberId){
            gymRepository.delete(findGym);
        }else throw new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND);

        List<GymImage> gymImageList = gymImageRepo.findByGymId(gymId);


        // 사진삭제
        for(GymImage value : gymImageList){
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
        if (lastFeedId == null) {
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
