import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.style';

// 소셜 미디어 아이콘
const githubIcon = `${process.env.PUBLIC_URL}/assets/images/button/header/git-hub.svg`;
const instagramIcon = `${process.env.PUBLIC_URL}/assets/images/button/header/instargram.svg`;
const twitterIcon = `${process.env.PUBLIC_URL}/assets/images/button/header/x-twitter.svg`;

const Header = () => {
  const location = useLocation();

  const handleScrollTo = (elementId) => {
    if (location.pathname !== '/intro') {
      // intro 페이지가 아니면 먼저 이동
      window.location.href = '/intro';
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/intro') {
      window.location.href = '/intro';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    handleScrollTo('project');
  };

  const handleHistoryClick = (e) => {
    e.preventDefault();
    handleScrollTo('history');
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.NavContainer>
          <S.NavList>
            <S.NavItem>
              <a href="/intro" onClick={handleHomeClick}>홈</a>
            </S.NavItem>
            <S.NavItem>
              <a href="/intro" onClick={handleProjectClick}>프로젝트</a>
            </S.NavItem>
            <S.NavItem>
              <a href="/intro" onClick={handleHistoryClick}>개발이력</a>
            </S.NavItem>
            <S.NavItem>
              <Link to="/contact">Contact</Link>
            </S.NavItem>
          </S.NavList>
        </S.NavContainer>
        <S.SocialContainer>
          <S.SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <S.SocialIcon src={githubIcon} alt="GitHub" />
          </S.SocialLink>
          <S.SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <S.SocialIcon src={instagramIcon} alt="Instagram" />
          </S.SocialLink>
          <S.SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <S.SocialIcon src={twitterIcon} alt="Twitter" />
          </S.SocialLink>
        </S.SocialContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
