import styled from 'styled-components';
import { flexCenterColumn } from '../styles/common';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.dark.background.main};
  width: 100%;
  margin: 0 auto;
  padding: 64px 0 0;
  ${flexCenterColumn}
`;
