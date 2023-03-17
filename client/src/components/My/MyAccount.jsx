// import classNames from 'classnames';
import BasicButton from '../UI/Button/BasicButton';

function MyPasswordEdit() {
  return (
    <div className="flex items-center justify-center">
      <BasicButton nav="/my/info/password" page="my" text="비밀번호 변경" />
      <BasicButton nav="/my/info/accountDelete" page="my" text="회원탈퇴" />
    </div>
  );
}

export default MyPasswordEdit;
