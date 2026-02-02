import styled from 'styled-components';

export const BasicLayOut = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.p`
  color: var(--www-mirrorfolio-com-nero, #FFF);
  font-family: Pretendard;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 84px;
  letter-spacing: -1.5px;
`;

export const SubTitle = styled.p`
  color: var(--www-mirrorfolio-com-santas-gray, #A1A1AA);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30.8px;
  letter-spacing: -0.55px;
`;

export const SeperateLine = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #3C87E0;
  border: 1px solid #1E293B;
`
