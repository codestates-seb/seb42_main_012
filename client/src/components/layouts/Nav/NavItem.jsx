import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

function NavItem({ to, className, children }) {
  const defaultClass = 'flex flex-col items-center justify-center text-lg';

  // 네비 아이템 active 스타일
  const activeClass = ({ isActive }) =>
    classNames(defaultClass, isActive ? 'text-[#FCA43B]' : '', className);

  if (!to) return <li className={defaultClass}>{children}</li>;

  return (
    <NavLink to={to} className={activeClass}>
      {children}
    </NavLink>
  );
}

export default NavItem;
