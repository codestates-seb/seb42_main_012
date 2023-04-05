import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsCheckCircle } from 'react-icons/bs';
import api from '../../../utils/api';
import DetailComment from './DetailComment';
import DetailBody from './DetailBody';
import DetailHeader from './DetailHeader';
import DetailTap from './DetailTab';
import DetailTitle from './DetailTitle';
import useBoardStore from '../../../state/useBoardStore';
import BoardDetailImage from './BoardDetailImage';
import BoardEditTabList from './BoardEditTabList';
import useMyStore from '../../../state/useMyStore';

function BoardDetail() {
  const { register, handleSubmit, watch } = useForm();
  const [edit, setEdit] = useState(false);
  const [editOn, setEditOn] = useState(false);
  const [deleteImage, setDeleteImage] = useState(false);
  const [deleteImageId, setDeleteImageId] = useState([]);
  const [tabId, setTabId] = useState(1);
  const { boardDetail, setBoardDetail } = useBoardStore();
  const { myElements } = useMyStore();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  const image = watch('image');

  useEffect(() => {
    if (image && image.length > 0) {
      setImagePreview(URL.createObjectURL(image[0]));
    }
  }, [image]);

  useEffect(() => {
    api
      .get(`communities/${id}`)
      .then(res => setBoardDetail(res.data))
      .catch(err => console.log(err));
  }, []);

  const onSubmit = async data => {
    const editData = {
      title: data.title,
      content: data.content,
      tabId,
      deletedCommunityImageId: deleteImageId,
    };

    const formData = new FormData();
    const blob = new Blob([JSON.stringify(editData)], {
      type: 'application/json',
    });

    formData.append('request', blob);

    if (data.image) {
      formData.append('files', data.image[0]);
    }

    await api
      .patch(`/communities/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        setEdit(false);
        setDeleteImageId([]);
        setDeleteImage(false);
        setImagePreview(null);
      });

    api
      .get(`communities/${id}`)
      .then(res => setBoardDetail(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="relative">
      <DetailHeader
        boardDetail={boardDetail}
        setEdit={setEdit}
        setEditOn={setEditOn}
        edit={edit}
        editOn={editOn}
        setDeleteImage={setDeleteImage}
        myMemberId={myElements.memberId}
        boardMemberId={boardDetail.memberId}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit">
          {edit ? (
            <div className="absolute text-2xl top-3 right-5">
              <BsCheckCircle />
            </div>
          ) : null}
        </button>
        {edit ? (
          <BoardEditTabList setTabId={setTabId} />
        ) : (
          <DetailTap tabName={boardDetail.tabName} />
        )}
        {edit ? (
          <input
            {...register('title')}
            defaultValue={boardDetail.title}
            className="w-full h-10 my-2 border rounded-md border-grey"
          />
        ) : (
          <DetailTitle title={boardDetail.title} />
        )}
        {edit ? (
          <input
            {...register('content')}
            className="w-full h-64 my-2 border rounded-md border-grey"
            defaultValue={boardDetail.content}
          />
        ) : boardDetail.contentImages &&
          boardDetail.contentImages.length > 0 ? (
          <BoardDetailImage
            contentImages={boardDetail.contentImages[0].contentImageUrl}
          />
        ) : null}
        {edit ? (
          <div>
            <img
              src={
                deleteImage
                  ? imagePreview
                  : boardDetail.contentImages &&
                    boardDetail.contentImages.length > 0
                  ? boardDetail.contentImages[0].contentImageUrl
                  : imagePreview
              }
              alt=""
              className="object-cover w-full mt-2 rounded-md h-72"
            />
            <div className="flex flex-col w-full">
              <label className="flex w-full mb-2">
                <input {...register('image')} type="file" className="hidden" />
                <span className="w-full px-2 py-1 mt-2 text-center border rounded-md">
                  사진추가
                </span>
              </label>
              <button
                type="button"
                className="w-full px-2 py-1 border rounded-md"
                onClick={() => {
                  setDeleteImage(true);
                  setDeleteImageId([
                    boardDetail.contentImages[0].contentImageId,
                  ]);
                }}
              >
                사진삭제
              </button>
              {/* <button
                type="button"
                className="w-40 px-2 py-1 ml-2 border rounded-md"
              >
                사진추가
              </button> */}
            </div>
          </div>
        ) : (
          <DetailBody content={boardDetail.content} />
        )}
      </form>
      <DetailComment />
    </div>
  );
}

export default BoardDetail;
