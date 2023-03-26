import { useEffect, useState } from 'react';

function GymPostImage({ register, image, id }) {
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (image && image.length > 0) {
      const file1 = image[0];
      setImagePreview(URL.createObjectURL(file1));
    }
  }, [image]);

  return (
    <div>
      <div className="flex flex-col mr-3">
        <img
          src={imagePreview}
          alt=""
          className="object-cover rounded-lg w-36 h-36"
        />
        <input
          id={id}
          type="file"
          {...register(`${id}`)}
          className="hidden"
          multiple
        />
        <label
          htmlFor={id}
          className="w-36 px-2 py-1 mt-1 mb-3 text-center border rounded-lg border-grey hover:bg-grey text-[var(--second)]"
        >
          사진 선택
        </label>
      </div>
    </div>
  );
}

export default GymPostImage;
