import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import * as S from './Base.style';

const HeaderWithFooter = () => {
  return (
    <S.BasicLayOut>
      <Header />
        <Outlet />
      <Footer />
    </S.BasicLayOut>
  );
};

export default HeaderWithFooter;