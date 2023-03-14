// import classNames from 'classnames';
import BasicButton from './UI/BasicButton';

function MyPasswordEdit() {
  return (
    <div className="flex items-center justify-center">
      <BasicButton page="my" text="비밀번호 변경" />
      <BasicButton page="my" text="회원탈퇴" />
    </div>
  );
}

export default MyPasswordEdit;
