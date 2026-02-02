import styled from 'styled-components';
import { text18SemiBold } from '../../styles/typography';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 320px; */
  background-color: ${({ theme }) => theme.dark.background.main};
`;

export const HeaderContent = styled.div`
  background-color: ${({ theme }) => theme.dark.background.overlay60};
  border: 1px solid ${({ theme }) => theme.dark.border.main};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 32px 20px 30px;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  width: 1113px;
  justify-content: flex-start;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
`;

export const NavItem = styled.div`
  a {
    ${text18SemiBold}
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.dark.text.primary};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.dark.background.overlay60};
  height: 24px;
  width: 1px;
  flex-shrink: 0;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`;

export const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`;
