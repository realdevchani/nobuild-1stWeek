import React from 'react';
import * as S from './Intro.style';
import MainSection from './intro/MainSection';
import ProjectSection from './intro/ProjectSection';
import HistorySection from './intro/HistorySection';
import ContactSection from './intro/ContactSection';

const Intro = () => {
  return (
    <S.Container>
      <div id="home">
        <MainSection />
      </div>
      <div id="project">
        <ProjectSection />
      </div>
      <div id="history">
        <HistorySection />
      </div>
      <ContactSection />
    </S.Container>
  );
};

export default Intro;
