import styled from 'styled-components';

export const BasicLayOut = styled.div`
  width: 100%;
  /* max-width: 1920px; */
  background-color: ${({ theme }) => theme.dark.background.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
