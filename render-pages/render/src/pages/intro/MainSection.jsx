import React from 'react';
import * as S from './MainSection.style';

const profileImage = `${process.env.PUBLIC_URL}/assets/images/user/avartar.svg`;

const MainSection = () => {
  return (
    <S.MainSection>
      <S.ProfileImageContainer>
        <S.ProfileImage src={profileImage} alt="Profile" />
      </S.ProfileImageContainer>
      <S.ProfileContent>
        <S.GreetingSection>
          <S.GreetingText>안녕하세요</S.GreetingText>
          <S.Title>
            노코드 개발자,
            <br />
            홍길동 입니다
          </S.Title>
        </S.GreetingSection>
        <S.DescriptionSection>
          <S.Description>
            노코드 툴 버블을 사용하여 Web, App 등을 구현합니다.
          </S.Description>
          <S.ButtonContainer>
            <S.PrimaryButton>프로젝트 보기</S.PrimaryButton>
            <S.SecondaryButton>문의하기</S.SecondaryButton>
          </S.ButtonContainer>
        </S.DescriptionSection>
      </S.ProfileContent>
    </S.MainSection>
  );
};

export default MainSection;
