import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav/Nav';

function MainLayout({ hasHeader, hasNav, titleText, nav }) {
  return (
    <main>
      {hasHeader && <Header titleText={titleText} nav={nav} />}
      <Main>
        <Outlet />
      </Main>
      {hasNav && <Nav />}
    </main>
  );
}

export default MainLayout;
