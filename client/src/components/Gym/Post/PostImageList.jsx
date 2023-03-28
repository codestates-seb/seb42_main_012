// import AWS from 'aws-sdk';
import GymPostImage from './PostImage';

function GymPostImageList({
  register,
  images,
  PatchGymImages,
  setDeletedGymImageId,
  deletedGymImageId,
}) {
  const ids = ['image1', 'image2', 'image3', 'image4', 'image5'];
  return (
    <>
      <div className="mb-8">
        <p className="text-sm text-[var(--main)]">대표 이미지</p>
        <div className="flex overflow-x-scroll">
          {ids.map((id, idx) => (
            <GymPostImage
              key={idx}
              idx={idx}
              register={register}
              image={images[idx]}
              id={id}
              PatchGymImages={PatchGymImages[idx]}
              setDeletedGymImageId={setDeletedGymImageId}
              deletedGymImageId={deletedGymImageId}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GymPostImageList;

// const S3_BUCKET_NAME = process.env.REACT_APP_AWS_BUCKET;
// const REGION = process.env.REACT_APP_AWS_REGION;

// AWS.config.update({
//   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
//   secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
// });

// const myBucket = new AWS.S3({
//   params: { Bucket: S3_BUCKET_NAME },
//   region: REGION,
// });

// const uploadFile = file => {
//   const fileName = file.name.replaceAll(' ', '');

//   const params = {
//     ACL: 'public-read',
//     Body: file,
//     Bucket: S3_BUCKET_NAME,
//     Key: fileName,
//   };

//   myBucket.putObject(params).send(err => {
//     if (err) console.log(err);
//     setImageUrl(
//       `http://seb42main012.s3-website.ap-northeast-2.amazonaws.com/${fileName}`,
//     );
//   });
// };
