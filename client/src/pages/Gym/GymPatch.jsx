import { useForm } from 'react-hook-form';
import { useState } from 'react';
import GymPostName from '../../components/Gym/Post/PostName';
import GymPostAddress from '../../components/Gym/Post/PostAddress';
import GymPostPhoneNumber from '../../components/Gym/Post/PostPhoneNumber';
import GymPostImageList from '../../components/Gym/Post/PostImageList';
import GymPostFacilities from '../../components/Gym/Post/PostFacilities';
import GymPostDetailPrice from '../../components/Gym/Post/PostDetailPrice';
import GymPostHours from '../../components/Gym/Post/PostHours';
import GymPostPrice from '../../components/Gym/Post/PostPrice';
import BasicButton from '../../components/UI/Button/BasicButton';
import gymAxios from './gymAxios';

function GymPatchPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [address, setAddress] = useState('');

  const [map, setMap] = useState({ Ma: 0, La: 0 });

  const image1 = watch('image1');
  const image2 = watch('image2');
  const image3 = watch('image3');
  const image4 = watch('image4');
  const image5 = watch('image5');
  const images = [image1, image2, image3, image4, image5];

  const onSubmit = async data => {
    const imagesData = [
      data.image1[0],
      data.image2[0],
      data.image3[0],
      data.image4[0],
      data.image5[0],
    ];

    const facility = [
      data.shower === false ? '' : 1,
      data.parking === false ? '' : 2,
      data.sportsWear === false ? '' : 3,
      data.locker === false ? '' : 4,
    ];

    while (facility.indexOf('') !== -1) {
      facility.splice(facility.indexOf(''), 1);
    }

    const gymsData = {
      gymName: data.gymName,
      address: `${address} ${data.detailAddress}`,
      phoneNumber: data.phoneNumber,
      businessHours: data.businessHours,
      price: data.price,
      detailPrices: data.detailPrice,
      facilityIdList: facility,
      latitude: map.Ma,
      longitude: map.La,
    };

    const formData = new FormData();
    const blob = new Blob([JSON.stringify(gymsData)], {
      type: 'application/json',
    });
    imagesData.map(image => formData.append('files', image));
    formData.append('request', blob);

    await gymAxios
      .patch('/gyms', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(res => {
        console.log(res);
      })
      .catch(() => alert('요청실패'));
    // navigate('/gyms');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GymPostName register={register} errors={errors} />
      <GymPostImageList register={register} errors={errors} images={images} />
      <GymPostFacilities register={register} />
      <GymPostPrice register={register} errors={errors} />
      <GymPostDetailPrice register={register} errors={errors} />
      <GymPostHours register={register} errors={errors} />
      <GymPostAddress
        register={register}
        errors={errors}
        setAddress={setAddress}
        address={address}
        setMap={setMap}
      />
      <GymPostPhoneNumber register={register} errors={errors} />
      <BasicButton page="board" text="Post" />
    </form>
  );
}

export default GymPatchPage;
