import { IoHomeOutline } from 'react-icons/io5';
// IoHomeSharp
import { BsPerson, BsPeople } from 'react-icons/bs';
// BsPersonFill
// BsPeopleFill
import { GiWeightLiftingUp } from 'react-icons/gi';

function Nav() {
  return (
    <div className="fixed bottom-0 flex w-393 h-100 bg-orange">
      <div>
        <IoHomeOutline />
        <span>HOME</span>
      </div>
      <div>
        <GiWeightLiftingUp />
        <span>GYM</span>
      </div>
      <div>
        <BsPeople />
        <span>BOARD</span>
      </div>
      <div>
        <BsPerson />
        <span>MY</span>
      </div>
    </div>
  );
}

export default Nav;
