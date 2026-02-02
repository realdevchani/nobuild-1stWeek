import styled from 'styled-components';
import { text20Medium, textInput, placeHolder } from '../../styles/typography';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  ${text20Medium}
  color: ${({ theme }) => theme.dark.text.primary};
  white-space: nowrap;
`;

export const Input = styled.input`
  ${textInput}
  background-color: ${({ theme }) => theme.dark.background.main};
  border: 1px solid ${({ theme }) => theme.dark.border.main};
  border-radius: 14px;
  height: 56px;
  padding: 18px 14px;
  color: ${({ theme }) => theme.dark.text.primary};
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    ${placeHolder}
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.dark.button.primary};
  }
`;

export const Textarea = styled.textarea`
  ${textInput}
  background-color: ${({ theme }) => theme.dark.background.main};
  border: 1px solid ${({ theme }) => theme.dark.border.main};
  border-radius: 14px;
  padding: 18px 14px;
  color: ${({ theme }) => theme.dark.text.primary};
  width: 100%;
  min-height: 150px;
  resize: vertical;
  box-sizing: border-box;
  font-family: 'pretendard', sans-serif;

  &::placeholder {
    ${placeHolder}
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.dark.button.primary};
  }
`;

export const Submit = styled.button`
  border-radius: 20px;
  height: 65px;
  width: 121px;
  background-color: #fff;
  padding: 20px 32px;
  /* color: ${({ theme }) => theme.dark.text.primary}; */
  cursor: pointer;
  background: var(--www-mirrorfolio-com-catskill-white, #F8FAFC);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10);

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
  
  color: var(--www-mirrorfolio-com-ebony, #0F172A);
text-align: center;
/* Pretendard-sb-18 */
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 25.2px */
letter-spacing: -0.45px;
`;
