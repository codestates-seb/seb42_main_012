import { Link } from 'react-router-dom';
// import BoardInfo from './BoardInfo';

function BoardContentList({ to, classname, tabName, title, content }) {
  return (
    <>
      <Link to={to}>
        <li
          className={`px-4 py-8 border-b border-[var(--second-border)] border-opacity-10 active:bg-[var(--main-active)] active:bg-opacity-10 ${classname}`}
        >
          <p>{title}</p>
          {content}
          {tabName}
        </li>
      </Link>
    </>
  );
}

export default BoardContentList;
