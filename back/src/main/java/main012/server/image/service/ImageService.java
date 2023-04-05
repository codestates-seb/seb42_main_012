package main012.server.image.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.image.entity.Image;
import main012.server.image.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class ImageService {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;
    private final ImageRepository imageRepository;

    public Image upload(MultipartFile multipartFile, String dirName) throws IOException {
        File file = convertMultipartFileToFile(multipartFile)
                .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File convert fail"));

        return upload(file, dirName);
    }

    public List<Image> upload(List<MultipartFile> multipartFiles, String dirName) throws IOException {
        List<Image> uploadedImages = new ArrayList<>();

        for (MultipartFile file : multipartFiles) {
            Image uploaded = upload(file, dirName);
            uploadedImages.add(uploaded);
        }

        return uploadedImages;
    }

    private Image upload(File file, String dirName) {
        String imageName = randomFileName(file, dirName);
        String imagePath = putS3(file, imageName);
        removeFile(file);

        Image uploadedImage = Image.builder()
                .imageName(imageName)
                .imagePath(imagePath)
                .build();

        return imageRepository.save(uploadedImage);
    }

    private String randomFileName(File file, String dirName) {
        return dirName + "/" + UUID.randomUUID() + file.getName();
    }

    private String putS3(File uploadFile, String fileName) {
        amazonS3.putObject(new PutObjectRequest(bucket, fileName, uploadFile)
                .withCannedAcl(CannedAccessControlList.PublicRead));
        return getS3(bucket, fileName);
    }

    private String getS3(String bucket, String fileName) {
        return amazonS3.getUrl(bucket, fileName).toString();
    }

    private void removeFile(File file) {
        file.delete();
    }

    public Optional<File> convertMultipartFileToFile(MultipartFile multipartFile) throws IOException {
        File file = new File(System.getProperty("user.dir") + "/" + multipartFile.getOriginalFilename());

        if (file.createNewFile()) {
            try (FileOutputStream fos = new FileOutputStream(file)) {
                fos.write(multipartFile.getBytes());
            }
            return Optional.of(file);
        }
        return Optional.empty();
    }

    /**
     * S3 bucket 에서 image 삭제
     */
    public void remove(Image image) {
        if (!amazonS3.doesObjectExist(bucket, image.getImageName())) {
            throw new AmazonS3Exception("Object " + image.getImageName() + " does not exist");
        }
        amazonS3.deleteObject(bucket, image.getImageName());
    }
}
