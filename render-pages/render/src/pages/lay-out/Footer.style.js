import styled from 'styled-components';
import { text16Regular, text14Regular } from '../../styles/typography';

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.dark.background.main};
  padding-bottom: 235px;
  padding-top: 48px;
`;

export const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.dark.border.main};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 320px;
  max-width: 1280px;
  padding: 0 16px;
  width: 1280px;
  margin: 0 auto;
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  /* margin-bottom: 48px; */
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 634.16px;
  & .email{
    margin-top: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  width: 100%;

  &:first-child {
    padding-top: 0;
  }
`;

export const InfoText = styled.p`
  ${text16Regular}
  color: ${({ theme }) => theme.dark.text.secondary};
  margin: 0;
  
`;

export const CopyrightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  width: 100%;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.dark.border.main};
`;

export const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CopyrightText = styled.p`
  ${text16Regular}
  color: ${({ theme }) => theme.dark.text.secondary};
  margin: 0;
  white-space: nowrap;
`;

export const RightsText = styled.p`
  ${text14Regular}
  color: ${({ theme }) => theme.dark.text.secondary};
  margin: 0;
  white-space: nowrap;
`;
