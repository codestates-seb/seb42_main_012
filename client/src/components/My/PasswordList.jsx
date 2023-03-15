import PasswordNow from './PasswordNow';
import PasswordNew from './PasswordNew';
import PasswordNewCheck from './PasswordNewCheck';
import BasicButton from '../UI/BasicButton';

function PasswordList() {
  return (
    <form>
      <PasswordNow />
      <PasswordNew />
      <PasswordNewCheck />
      <BasicButton
        to="/my"
        page="my_password"
        type="button"
        text="비밀번호 변경"
      />
    </form>
  );
}

export default PasswordList;
