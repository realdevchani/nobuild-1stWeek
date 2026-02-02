import styled from 'styled-components';
import { text36SemiBold, text16Regular, text18SemiBold } from '../../styles/typography';

export const ContactSection = styled.div`
  width: 952px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 259.48px;
`;

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.dark.background.overlay60};
  border: 1px solid ${({ theme }) => theme.dark.border.main};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 20px;
`;

export const ContactTitle = styled.h2`
  ${text36SemiBold}
  color: ${({ theme }) => theme.dark.text.primary};
  margin: 0;
`;

export const ContactDescription = styled.p`
  ${text16Regular}
  color: ${({ theme }) => theme.dark.text.secondary};
  margin: 0;
`;

export const ContactButton = styled.button`
  ${text18SemiBold}
  background-color: ${({ theme }) => theme.dark.text.primary};
  border-radius: 20px;
  padding: 20px 32px;
  color: ${({ theme }) => theme.dark.text.dark};
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  padding: 20 32px;
  margin: 0 20px;

  &:hover {
    opacity: 0.9;
  }
`;
