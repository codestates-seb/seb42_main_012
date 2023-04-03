import { useEffect, useState } from 'react';

function GymPostImage({
  register,
  image,
  id,
  PatchGymImages,
  setDeletedGymImageId,
  deletedGymImageId,
}) {
  const [imagePreview, setImagePreview] = useState(
    PatchGymImages === undefined ? null : PatchGymImages.gymImageUrl,
  );
  const [imagePatchView, setImagePatchView] = useState(false);

  useEffect(() => {
    if (image && image.length > 0) {
      const file1 = image[0];
      setImagePreview(URL.createObjectURL(file1));
    }
  }, [image]);

  const imageDelete = () => {
    if (PatchGymImages !== null) {
      setDeletedGymImageId([PatchGymImages.gymImageId, ...deletedGymImageId]);
      setImagePatchView(true);
      setImagePreview(null);
    }
  };

  return (
    <div>
      <div className="flex flex-col mr-3">
        <img
          src={imagePreview}
          alt=""
          className="object-cover rounded-lg w-36 h-36"
        />
        <input id={id} type="file" {...register(`${id}`)} className="hidden" />
        <label
          htmlFor={id}
          className="w-36 px-2 py-1 mt-1 mb-1 text-center border rounded-lg border-grey hover:bg-grey text-[var(--second)]"
        >
          사진 선택
        </label>
        {imagePatchView === true ? null : PatchGymImages !== undefined ? (
          <button
            type="button"
            onClick={imageDelete}
            className="px-2 mb-3 text-center border rounded-lg h-7 w-36 border-red hover:text-white hover:bg-red text-red"
          >
            사진 삭제
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default GymPostImage;
