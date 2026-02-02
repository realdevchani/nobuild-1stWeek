import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.dark.background.main};
  width: 1024px;
  margin: 0 auto;
  padding: 150px 128px;
  gap: 64px;
`;