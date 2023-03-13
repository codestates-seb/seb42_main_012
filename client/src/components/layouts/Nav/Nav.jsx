import { AiFillHome } from 'react-icons/ai';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { BsFillPersonFill, BsFillPeopleFill } from 'react-icons/bs';

function Nav() {
  /* //TODO: 액티브 될 경우 해당 페이지 색상 변하고, 고정하기
  const activeClass = ({ isActive }) =>
    className(defaultClass, isActive ? 'text-[#FCA43B]' : '', className);
    */

  const defaultClass = 'flex flex-col items-center justify-center text-lg';
  const iconClass = 'text-4xl';

  return (
    <nav className="fixed bottom-0 w-full bg-[#f8f8f8] py-5">
      <ul className="flex items-center justify-around">
        <li className={defaultClass}>
          <AiFillHome className={iconClass} />
          <span>HOME</span>
        </li>
        <li className={defaultClass}>
          <GiWeightLiftingUp className={iconClass} />
          <span>GYM</span>
        </li>
        <li className={defaultClass}>
          <BsFillPeopleFill className={iconClass} />
          <span>BOARD</span>
        </li>
        <li className={defaultClass}>
          <BsFillPersonFill className={iconClass} />
          <span>MY</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
