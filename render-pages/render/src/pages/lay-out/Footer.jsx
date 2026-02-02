import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Divider />
      <S.FooterContent>
        <S.InfoSection>
          <S.InfoContainer>
            <S.InfoItem>
              <S.InfoText className='email'>이메일 : oooo@ooooo.io</S.InfoText>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoText>주소 : 서울 강남구 삼성로 32길 12-11. Seoul South Korea</S.InfoText>
            </S.InfoItem>
          </S.InfoContainer>
        </S.InfoSection>
        <S.CopyrightSection>
          <S.SectionDivider />
          <S.CopyrightContainer>
            <S.CopyrightText>© 2025 Myportfolio</S.CopyrightText>
            <S.RightsText>All Rights Reserved.</S.RightsText>
          </S.CopyrightContainer>
        </S.CopyrightSection>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
