import classNames from 'classnames';

function TabListItem({ to, className, children, boardTab }) {
  const defaultClass = 'flex flex-col items-center justify-center text-lg';

  // active 스타일링
  const activeClass = ({ isActive }) =>
    classNames(defaultClass, isActive ? 'text-[#FCA43B]' : '', className);

  if (!to) return <li className={defaultClass}>{children}</li>;

  return <li className={activeClass}>{boardTab}</li>;
}

export default TabListItem;
