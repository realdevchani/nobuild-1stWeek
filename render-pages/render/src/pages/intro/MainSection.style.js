import styled from 'styled-components';
import { text60Bold, text18Regular, text24SemiBold, text16SemiBold } from '../../styles/typography';

export const MainSection = styled.div`
  width: 1024px;
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 300px 20px;
`;

export const ProfileImageContainer = styled.div`
  width: 470px;
  height: 470px;
  border-radius: 235px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.dark.background.overlay};
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20px;
  width: 494px;
`;

export const GreetingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GreetingText = styled.p`
  ${text18Regular}
  color: ${({ theme }) => theme.dark.text.secondary};
  margin: 0;
`;

export const Title = styled.h1`
  ${text60Bold}
  color: ${({ theme }) => theme.dark.text.primary};
  margin: 0;
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.p`
  ${text24SemiBold}
  color: ${({ theme }) => theme.dark.text.tertiary};
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  max-width: 448px;
`;

export const PrimaryButton = styled.button`
  ${text16SemiBold}
  background-color: ${({ theme }) => theme.dark.button.primary};
  border: 1px solid ${({ theme }) => theme.dark.border.main};
  border-radius: 12px;
  padding: 12px 25px;
  color: ${({ theme }) => theme.dark.text.tertiary};
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.button`
  ${text16SemiBold}
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.dark.border.main};
  border-radius: 12px;
  padding: 12px 25px;
  color: ${({ theme }) => theme.dark.text.tertiary};
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;
