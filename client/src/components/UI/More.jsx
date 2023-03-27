import { useLocation, useParams } from 'react-router-dom';
import BasicButton from './Button/BasicButton';

function More({ memberId }) {
  const param = useParams();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === `/board/${param.id}` ? (
        <div className="absolute top-20 right-4 z-10 bg-[#fff] border border-[var(--main)] rounded-lg text-center flex flex-col justify-center items-center">
          <BasicButton page="more" text="수정하기" nav="/board/boardedit" />
          <BasicButton page="more" text="삭제하기" nav="/board" />
        </div>
      ) : (
        <div className="absolute top-20 right-4 z-10 bg-[#fff] border border-[var(--main)] rounded-lg text-center flex flex-col justify-center items-center">
          <BasicButton
            page="more"
            text="수정하기"
            nav="/gyms/gympost"
            memberId={memberId}
          />
          <BasicButton page="more" text="삭제하기" nav="/gyms" />
        </div>
      )}
    </>
  );
}

export default More;
