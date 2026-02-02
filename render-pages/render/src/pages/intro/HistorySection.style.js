import styled from 'styled-components';
import { text36SemiBold, text16Regular, text14Regular } from '../../styles/typography';

export const HistorySection = styled.div`
  width: 992px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  ${text36SemiBold}
  color: ${({ theme }) => theme.dark.text.primary};
  margin: 0;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.dark.border.main};
  border: 1px solid ${({ theme }) => theme.dark.border.main};
`;

export const HistoryContainer = styled.div`
  width: 100%;
  height: 310.52px;
  position: relative;
  /* overflow: hidden;
  mask-image: url('http://localhost:3845/assets/565290a3ebfd73a2bb366109ef2d95a68316aec5.svg');
  mask-size: 100% 310.52px;
  mask-position: 0% 0px;
  mask-repeat: no-repeat; */
`;

export const HistoryList = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  /* margin-top: 16px; */
  /* margin-bottom: 16px; */
  overflow: scroll;
`;

export const HistoryItem = styled.div`
  border: 1px solid ${({ theme }) => theme.dark.border.light};
  border-radius: 20px;
  padding: 25px 33px;
  width: 384px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 20px;
  border-left: 4px solid ${({ theme }) => theme.dark.border.dark};
`;

export const HistoryText = styled.p`
  ${text16Regular}
  color: ${({ theme }) => theme.dark.text.light};
  height: 154px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const HistoryMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HistoryDate = styled.p`
  ${text14Regular}
  color: ${({ theme }) => theme.dark.text.muted};
  margin: 0;
`;

export const HistoryProject = styled.p`
  ${text14Regular}
  color: ${({ theme }) => theme.dark.text.muted};
  margin: 0;
`;
