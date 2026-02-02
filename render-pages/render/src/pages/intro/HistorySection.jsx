import React from 'react';
import * as S from './HistorySection.style';

const historyData = [
  {
    text: '2022년부터 약 1년간 중견 물류기업의 통합 물류관리 시스템 구축 프로젝트에 참여했습니다. Node.js와 Express 프레임워크 기반으로 전체 서버 아키텍처를 설계했으며, MongoDB와 PostgreSQL을 동시에 사용하는 하이브리드 데이터베이스 구조를 도입했습니다. RESTful API를 통해 각 지점의 입출고 데이터를 실시간으로 수집 및 분석할 수 있도록 했고, 권한 관리를 통해 보안을 강화했습니다.',
    date: '2023.05 - 2023.10',
    project: '물류관리 시스템 구축',
  },
  {
    text: '스타트업 초기 단계에서 MVP(최소 기능 제품) 플랫폼을 기획하고 직접 구현한 경험이 있습니다. React와 Node.js, MongoDB를 기반으로 빠르게 프로토타입을 개발하였으며, 약 6주 만에 유저 피드백을 받을 수 있는 베타 버전을 출시했습니다. 프론트엔드에서는 Chakra UI를 활용해 빠르고 일관된 디자인 시스템을 도입했고, GitHub Actions를 통해 자동 배포 파이프라인을 설정했습니다.',
    date: '2024.01 - 2024.02',
    project: '대학교 수강신청 시스템 리뉴얼',
  },
  {
    text: '기존의 수강신청 시스템이 느리고 불편하다는 피드백을 받아, 전체 프론트엔드 UI/UX 및 구조를 React 기반으로 재설계하였습니다. 사용자의 주요 액션(과목 검색, 즐겨찾기 등록, 실시간 신청)은 Redux 상태 관리와 Context API를 활용하여 일관되게 처리했습니다. 기존에는 페이지 리로딩이 자주 발생했지만, React Router와 CSR 구조를 도입하여 응답 속도를 약 3배 이상 개선했습니다.',
    date: '2024.03 - 2024.05',
    project: '스타트업 MVP 플랫폼 개발',
  },
];

const HistorySection = () => {
  return (
    <S.HistorySection>
      <S.SectionHeader>
        <S.SectionTitle>개발이력</S.SectionTitle>
        <S.Separator />
      </S.SectionHeader>
      <S.HistoryContainer>
        <S.HistoryList>
          {historyData.map((history, index) => (
            <S.HistoryItem key={index}>
              <S.HistoryContent>
                <S.HistoryText>{history.text}</S.HistoryText>
                <S.HistoryMeta>
                  <S.HistoryDate>{history.date}</S.HistoryDate>
                  <S.HistoryProject>{history.project}</S.HistoryProject>
                </S.HistoryMeta>
              </S.HistoryContent>
            </S.HistoryItem>
          ))}
        </S.HistoryList>
      </S.HistoryContainer>
    </S.HistorySection>
  );
};

export default HistorySection;
