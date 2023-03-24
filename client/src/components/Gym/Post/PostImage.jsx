import AWS from 'aws-sdk';
import { useState } from 'react';

function GymPostImage({ imageUrl, setImageUrl }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const S3_BUCKET_NAME = process.env.REACT_APP_AWS_BUCKET;
  const REGION = process.env.REACT_APP_AWS_REGION;

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET_NAME },
    region: REGION,
  });

  const handleFileInput = e => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = file => {
    const fileName = file.name.replaceAll(' ', '');

    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET_NAME,
      Key: fileName,
    };

    myBucket.putObject(params).send(err => {
      if (err) console.log(err);
      setImageUrl(
        `http://seb42main012.s3-website.ap-northeast-2.amazonaws.com/${fileName}`,
      );
    });
  };

  return (
    <>
      <div className="mb-8">
        <p className="text-sm text-[var(--main)]">대표 이미지</p>
        <div className="flex flex-col">
          <img src={imageUrl} alt="" />
          <div className="flex justify-center mt-3 ">
            <input
              id="image"
              type="file"
              onChange={handleFileInput}
              className="hidden"
            />
            <label
              htmlFor="image"
              className="w-40 px-2 py-1 mr-4 text-center border rounded-lg border-grey hover:bg-grey text-[var(--second)]"
            >
              사진 선택
            </label>
            <button
              type="button"
              onClick={() => uploadFile(selectedFile)}
              className="w-40 px-2 border rounded-lg py-1text-center border-grey hover:bg-grey text-[var(--second)]"
            >
              사진 확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GymPostImage;
