import { useLocation, useParams } from 'react-router-dom';
import BasicButton from './Button/BasicButton';

function More() {
  const param = useParams();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {/* {path === `/board/${param.id}` ? (
        <div className="absolute top-20 right-4 z-10 bg-[#fff] border border-[var(--main)] rounded-lg text-center flex flex-col justify-center items-center">
          <BasicButton page="more" text="수정하기" />
          <BasicButton
            page="more"
            text="삭제하기"
            nav="/board"
            path={path}
            id={param.id}
          />
        </div>
      ) : ( */}
      <div className="absolute top-20 right-4 z-10 bg-[#fff] border border-[var(--main)] rounded-lg text-center flex flex-col justify-center items-center">
        <BasicButton
          page="more"
          text="수정하기"
          nav="/gyms/gymedit"
          path={path}
          id={param.id}
        />
        <BasicButton
          page="more"
          text="삭제하기"
          nav="/gyms"
          path={path}
          id={param.id}
        />
      </div>
      {/* )} */}
    </>
  );
}

export default More;
