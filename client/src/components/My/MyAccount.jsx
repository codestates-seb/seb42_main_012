// import classNames from 'classnames';
import BasicButton from '../UI/BasicButton';

function MyPasswordEdit() {
  return (
    <div className="flex items-center justify-center">
      <BasicButton
        to="/my/info/password"
        page="my"
        text="비밀번호 변경"
        type="button"
      />
      <BasicButton
        to="/my/info/accountDelete"
        page="my"
        text="회원탈퇴"
        type="button"
      />
    </div>
  );
}

export default MyPasswordEdit;
