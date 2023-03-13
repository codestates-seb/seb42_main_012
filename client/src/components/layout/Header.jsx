import HeaderTitle from '../HeaderTitle';
import BackButton from '../BackButton';

function Header() {
  return (
    <div className="fixed top-0 flex justify-center bg-white w-393">
      <BackButton />
      <HeaderTitle titleText="GYM" />
    </div>
  );
}

export default Header;
