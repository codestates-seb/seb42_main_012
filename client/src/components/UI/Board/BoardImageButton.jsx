import { useEffect, useState } from 'react';

function BoardImageButton({ register, image }) {
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (image && image.length > 0) {
      const file1 = image[0];
      setImagePreview(URL.createObjectURL(file1));
    }
  }, [image]);

  return (
    <div>
      <img src={imagePreview} alt="" className="w-44" />
      <label>
        <input {...register('image')} type="file" className="hidden" />
        <span className="text-md py-2 font-medium rounded-lg flex justify-center w-90 bg-[#000] text-[#fff] mt-3">
          이미지 업로드
        </span>
      </label>
    </div>
  );
}

export default BoardImageButton;
