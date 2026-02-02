import styled from 'styled-components';
import { textSubTitleLight, textTitleBold } from '../../styles/typography';

export const BasicLayOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 64px;
`;

export const Title = styled.p`
  ${textTitleBold}
`;

export const SubTitle = styled.p`
  ${textSubTitleLight}
  color: #A1A1AA;
`

export const SeperateLine = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #3C87E0;
  border: 1px solid #1E293B;
  height: 30px;
`
