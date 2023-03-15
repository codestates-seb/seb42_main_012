// import { useState } from 'react';
import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import PasswordList from '../components/My/PasswordList';

function PasswordEditPage() {
  return (
    <>
      <Header titleText="MY" />
      <Main>
        <PasswordList />
      </Main>
      <Nav />
    </>
  );
}

export default PasswordEditPage;
