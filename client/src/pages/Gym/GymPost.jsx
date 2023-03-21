import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import GymPostName from '../../components/Gym/Post/PostName';
import GymPostAddress from '../../components/Gym/Post/PostAddress';
import GymPostPhoneNumber from '../../components/Gym/Post/PostPhoneNumber';
import GymPostImage from '../../components/Gym/Post/PostImage';
import GymPostFacilities from '../../components/Gym/Post/PostFacilities';
import GymPostDetailPrice from '../../components/Gym/Post/PostDetailPrice';
import GymPostHours from '../../components/Gym/Post/PostHours';
import GymPostPrice from '../../components/Gym/Post/PostPrice';
import BasicButton from '../../components/UI/Button/BasicButton';
import useStore from '../../state/useStore';
import Today from '../../components/UI/Today';

function GymPostPage() {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  const { gyms } = useStore();
  const navigate = useNavigate();

  const onSubmit = async data => {
    const facility = [
      data.shower === false
        ? ''
        : {
            facilityId: 1,
            facilityName: '샤워실',
          },
      data.locker === false
        ? ''
        : {
            facilityId: 2,
            facilityName: '락커룸',
          },
      data.parking === false
        ? ''
        : {
            facilityId: 3,
            facilityName: '주차장',
          },
      data.sportsWear === false
        ? ''
        : {
            facilityId: 4,
            facilityName: '운동복 대여',
          },
    ];

    while (facility.indexOf('') !== -1) {
      facility.splice(facility.indexOf(''), 1);
    }

    const gymsData = {
      gymId: gyms.length + 1,
      createdAt: Today(),
      gymName: data.gymName,
      gymImage: imageUrl,
      address: data.address,
      phoneNumber: data.phoneNumber,
      prices: [data.price1, data.price2],
      detailPrices: data.detailPrice,
      businessHours: data.businessHours,
      gymBookmarkCnt: 0,
      facilities: facility,
    };

    await axios.post('/gyms', gymsData);

    navigate('/gyms');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GymPostName register={register} />
      <GymPostImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <GymPostFacilities register={register} />
      <GymPostPrice register={register} />
      <GymPostDetailPrice register={register} />
      <GymPostHours register={register} />
      <GymPostAddress register={register} />
      <GymPostPhoneNumber register={register} />
      <BasicButton page="board" text="Post" />
    </form>
  );
}

export default GymPostPage;
