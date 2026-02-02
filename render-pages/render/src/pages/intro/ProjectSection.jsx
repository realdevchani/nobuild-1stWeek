import React from 'react';
import * as S from './ProjectSection.style';

const smartLogImage = `${process.env.PUBLIC_URL}/assets/images/item/smart.svg`;
const eduTrackImage = `${process.env.PUBLIC_URL}/assets/images/item/edu.svg`;
const fitTogetherImage = `${process.env.PUBLIC_URL}/assets/images/item/fit.svg`;
const planHiveImage = `${process.env.PUBLIC_URL}/assets/images/item/plan.svg`;
const devVaultImage = `${process.env.PUBLIC_URL}/assets/images/item/dev.png`;
const docEaseImage = `${process.env.PUBLIC_URL}/assets/images/item/doc.svg`;
const linkIcon = `${process.env.PUBLIC_URL}/assets/images/button/effect/arrow.svg`;

const projects = [
  {
    title: 'Smart\nLog',
    description: 'SmartLog는 AI를 활용한 실시간 물류 자동화 효율적인 입출고를 지원하는 솔루션입니다.',
    image: smartLogImage,
    alt: 'Smart Log',
  },
  {
    title: 'Edu\nTrack',
    description: '학생의 학습 행동 데이터를 분석하여 개인화된 학습 콘텐츠를 제공하는 교육 플랫폼입니다.',
    image: eduTrackImage,
    alt: 'Edu Track',
  },
  {
    title: 'Fit\nTogether',
    description: '사용자 간 운동 목표를 공유하고, 파트너를 찾는 기능을 중심으로 한 소셜 매칭 앱입니다.',
    image: fitTogetherImage,
    alt: 'Fit Together',
  },
  {
    title: 'Plan\nHive',
    description: '자주 쓰는 코드, 명령어 등을 공유하고 태그별로 저장할 수 있는 커뮤니티 플랫폼입니다.',
    image: planHiveImage,
    alt: 'Plan Hive',
  },
  {
    title: 'Dev\nVault',
    description: '소규모 스타트업 및 프리랜서 팀을 위한 협업 중심의 일정 관리 툴 입니다.',
    image: devVaultImage,
    alt: 'Dev Vault',
  },
  {
    title: 'Doc\nEase',
    description: '기업 내부 문서의 자동 생성, 서명, 기록 관리까지 전 과정을 자동화하는 솔루션입니다.',
    image: docEaseImage,
    alt: 'Doc Ease',
  },
];

const ProjectSection = () => {
  return (
    <S.ProjectSection>
      <S.SectionHeader>
        <S.SectionTitle>프로젝트</S.SectionTitle>
        <S.Separator />
      </S.SectionHeader>
      <S.ProjectWrap>
        {projects.map((project, index) => (
          <S.ProjectCard key={index}>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
            <S.ProjectImageContainer>
              <S.ProjectImage src={project.image} alt={project.alt} />
            </S.ProjectImageContainer>
            <S.ProjectLink>
              <S.LinkIcon src={linkIcon} alt="Link" />
            </S.ProjectLink>
          </S.ProjectCard>
        ))}
      </S.ProjectWrap>
    </S.ProjectSection>
  );
};

export default ProjectSection;
