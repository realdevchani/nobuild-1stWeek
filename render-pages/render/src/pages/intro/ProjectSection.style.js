import styled from 'styled-components';
import { text36SemiBold, text18SemiBold, text16Regular } from '../../styles/typography';

export const ProjectSection = styled.div`
  width: 1024px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 0 16px;
  margin-bottom: 200px;
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
  width: 992px;
  height: 2px;
  background-color: ${({ theme }) => theme.dark.border.main};
  border: 1px solid ${({ theme }) => theme.dark.border.main};
`;

export const ProjectWrap = styled.div`
  display: flex;
  width: 992px;
  min-height: 456px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
`;
export const ProjectCard = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 320px;
  height: 456px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.dark.border.main};
  background-color: ${({ theme }) => theme.dark.background.overlay60};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(6px);
`;


export const ProjectTitle = styled.h3`
  ${text18SemiBold}
  color: ${({ theme }) => theme.dark.text.primary};
  text-align: center;
  margin: 0;
  white-space: pre-line;
`;

export const ProjectDescription = styled.p`
  ${text16Regular}
  color: ${({ theme }) => theme.dark.text.secondary};
  height: 43px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: 190.5px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.dark.background.card};
  position: relative;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: auto;
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: 34px;
  background-color: ${({ theme }) => theme.dark.button.secondary};
  padding: 4px;
  border-radius: 40px;
  /* transform: rotate(45deg); */
`;
