// import classNames from 'classnames';
import useMyStore from '../../state/useMyStore';
import BasicButton from '../UI/Button/BasicButton';

function MyPasswordEdit() {
  const { myElements } = useMyStore();
  return (
    <>
      {myElements.role === 'USER' ? (
        <div className="flex items-center justify-center">
          <BasicButton
            nav="/my/info/password"
            page="my"
            type="button"
            text="비밀번호 변경"
          />
          <BasicButton
            nav="/my/info/accountDelete"
            page="my"
            type="button"
            text="회원탈퇴"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <BasicButton
            nav="/my/info/password"
            page="my"
            type="button"
            text="비밀번호 변경"
          />
          <BasicButton
            nav="/my/info/accountDelete"
            page="my"
            type="button"
            text="회원탈퇴"
          />
        </div>
      )}
    </>
  );
}

export default MyPasswordEdit;
