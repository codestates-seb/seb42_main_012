// import { useState } from 'react';
import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import CheckPasswordList from '../components/My/CheckPasswordList';

function AccountDeletePage() {
  return (
    <>
      <Header titleText="MY" />
      <Main>
        <CheckPasswordList />
      </Main>
      <Nav />
    </>
  );
}

export default AccountDeletePage;
