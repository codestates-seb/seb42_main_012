import { AiFillHome } from 'react-icons/ai';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { BsFillPersonFill, BsFillPeopleFill } from 'react-icons/bs';
import NavItem from './NavItem';

function Nav() {
  return (
    <nav className="fixed bottom-0 w-full bg-[#f8f8f8] py-5">
      <ul className="flex items-center justify-around">
        <NavItem to="/">
          <AiFillHome className="text-4xl" />
          <span>HOME</span>
        </NavItem>
        <NavItem to="/gyms">
          <GiWeightLiftingUp className="text-4xl" />
          <span>GYM</span>
        </NavItem>
        <NavItem to="">
          <BsFillPeopleFill className="text-4xl" />
          <span>BOARD</span>
        </NavItem>
        <NavItem to="/my">
          <BsFillPersonFill className="text-4xl" />
          <span>MY</span>
        </NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
