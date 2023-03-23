// import { useForm } from 'react-hook-form';
import PasswordNow from './PasswordNow';
import PasswordNew from './PasswordNew';
import PasswordNewCheck from './PasswordNewCheck';
import BasicButton from '../../UI/Button/BasicButton';

function PasswordList() {
  // const { register, handleSubmit } = useForm();
  return (
    <form>
      <PasswordNow />
      <PasswordNew />
      <PasswordNewCheck />
      <BasicButton nav="/my" page="my_password" text="비밀번호 변경" />
    </form>
  );
}

export default PasswordList;
