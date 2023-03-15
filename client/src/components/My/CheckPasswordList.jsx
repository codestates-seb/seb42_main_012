import PasswordNow from './PasswordNow';
import PasswordNowCheck from './PasswordNowCheck';
import BasicButton from '../UI/BasicButton';

function CheckPasswordList() {
  return (
    <form>
      <PasswordNow />
      <PasswordNowCheck />
      <BasicButton to="/" page="my_password" type="button" text="회원탈퇴" />
    </form>
  );
}

export default CheckPasswordList;
