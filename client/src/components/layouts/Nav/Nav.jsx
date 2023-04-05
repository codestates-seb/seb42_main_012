import { useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { BsFillPersonFill, BsFillPeopleFill } from 'react-icons/bs';
import NavItem from './NavItem';
import useMyStore from '../../../state/useMyStore';

function Nav() {
  const location = useLocation();
  const path = location.pathname;
  const { myElements } = useMyStore();

  return (
    <>
      {myElements.role === 'USER' &&
      (path === '/' ||
        path === '/gyms' ||
        path === '/board' ||
        path === '/my') ? (
        <nav className="fixed bottom-0 w-2/6 bg-[#f8f8f8] py-5 z-10">
          <ul className="flex items-center justify-around">
            <NavItem to="/">
              <AiFillHome className="text-3xl" />
              <span className="font-medium text-md">HOME</span>
            </NavItem>
            <NavItem to="/gyms">
              <GiWeightLiftingUp className="text-3xl" />
              <span className="font-medium text-md">GYM</span>
            </NavItem>
            <NavItem to="/board">
              <BsFillPeopleFill className="text-3xl" />
              <span className="font-medium text-md">BOARD</span>
            </NavItem>
            <NavItem to="/my">
              <BsFillPersonFill className="text-3xl" />
              <span className="font-medium text-md">MY</span>
            </NavItem>
          </ul>
        </nav>
      ) : myElements.role === 'OWNER' &&
        (path === '/' || path === '/gyms' || path === '/my') ? (
        <nav className="fixed bottom-0 bg-[#f8f8f8] py-5 w-2/6">
          <ul className="flex items-center justify-around">
            <NavItem to="/">
              <AiFillHome className="text-3xl" />
              <span className="font-medium text-md">HOME</span>
            </NavItem>
            <NavItem to="/gyms">
              <GiWeightLiftingUp className="text-3xl" />
              <span className="font-medium text-md">GYM</span>
            </NavItem>
            <NavItem to="/my">
              <BsFillPersonFill className="text-3xl" />
              <span className="font-medium text-md">MY</span>
            </NavItem>
          </ul>
        </nav>
      ) : null}
    </>
  );
}

export default Nav;
