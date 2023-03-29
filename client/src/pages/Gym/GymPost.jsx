import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import useGymStore from '../../state/useGymStore';

function GymPostPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { gymsDetail } = useGymStore();
  const [address, setAddress] = useState('');
  const [map, setMap] = useState({ Ma: 0, La: 0 });
  const [patchMap, setPatchMap] = useState({ Ma: 0, La: 0 });
  const { register, handleSubmit, watch } = useForm();
  const [deletedGymImageId, setDeletedGymImageId] = useState([]);
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

    if (path === '/gyms/gymedit') {
      const gymsData = {
        gymName: !data.gymName ? gymsDetail.gymName : data.gymName,
        address: !address ? gymsDetail.address : address,
        phoneNumber: !data.phoneNumber
          ? gymsDetail.phoneNumber
          : data.phoneNumber,
        businessHours: !data.businessHours
          ? gymsDetail.businessHours
          : data.businessHours,
        price: !data.price ? gymsDetail.price : data.price,
        detailPrices: !data.detailPrices
          ? gymsDetail.detailPrices
          : data.detailPrices,
        facilityIdList: facility,
        latitude: !map.Ma ? patchMap.Ma : map.Ma,
        longitude: !map.La ? patchMap.La : map.La,
        deletedGymImageId,
      };

      const formData = new FormData();
      const blob = new Blob([JSON.stringify(gymsData)], {
        type: 'application/json',
      });
      if (imagesData.filter(i => i === undefined).length === 5) {
        formData.append('files', 'File');
      } else {
        imagesData.map(image => formData.append('files', image));
      }
      formData.append('request', blob);

      await gymAxios
        .patch(`/gyms/${gymsDetail.gymId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          console.log(res);
          navigate(`/gyms/${gymsDetail.gymId}`);
        })
        .catch(() => {
          console.log(gymsData);
          console.log(imagesData);
          alert('입력하신 내용을 확인해주세요');
        });
    } else {
      const gymsData = {
        gymName: !data.gymName ? gymsDetail.gymName : data.gymName,
        address: !address ? gymsDetail.address : address,
        phoneNumber: !data.phoneNumber
          ? gymsDetail.phoneNumber
          : data.phoneNumber,
        businessHours: !data.businessHours
          ? gymsDetail.businessHours
          : data.businessHours,
        price: !data.price ? gymsDetail.price : data.price,
        detailPrices: !data.detailPrices
          ? gymsDetail.detailPrices
          : data.detailPrices,
        facilityIdList: facility,
        latitude: !map.Ma ? patchMap.Ma : map.Ma,
        longitude: !map.La ? patchMap.La : map.La,
      };

      const formData = new FormData();
      const blob = new Blob([JSON.stringify(gymsData)], {
        type: 'application/json',
      });
      imagesData.map(image => formData.append('files', image));
      formData.append('request', blob);

      await gymAxios
        .post(`/gyms`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          console.log(res);
          navigate(`/gyms`);
        })
        .catch(() => {
          console.log(gymsData);
          alert('입력하신 내용을 확인해주세요');
        });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GymPostName register={register} patchGymName={gymsDetail.gymName} />
      <GymPostImageList
        register={register}
        images={images}
        PatchGymImages={
          gymsDetail.gymImages === undefined ? [] : gymsDetail.gymImages
        }
        setDeletedGymImageId={setDeletedGymImageId}
        deletedGymImageId={deletedGymImageId}
      />
      <GymPostFacilities
        register={register}
        facilities={gymsDetail.facilities}
      />
      <GymPostPrice register={register} patchPrice={gymsDetail.price} />
      <GymPostDetailPrice
        register={register}
        patchDetailPrice={gymsDetail.detailPrices}
      />
      <GymPostHours register={register} patchHours={gymsDetail.businessHours} />
      <GymPostAddress
        // register={register}
        setAddress={setAddress}
        address={address}
        setMap={setMap}
        setPatchMap={setPatchMap}
        patchAddress={gymsDetail.address}
      />
      <GymPostPhoneNumber
        register={register}
        patchPhoneNumber={gymsDetail.phoneNumber}
      />
      <BasicButton page="board" text="Post" />
    </form>
  );
}

export default GymPostPage;
