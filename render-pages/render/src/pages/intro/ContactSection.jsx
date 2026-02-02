import React from 'react';
import * as S from './ContactSection.style';

const ContactSection = () => {
  return (
    <S.ContactSection>
      <S.ContactCard>
        <S.ContactInfo>
          <S.ContactTitle>CONTACT</S.ContactTitle>
          <S.ContactDescription>
            Let's create something amazing together.
          </S.ContactDescription>
        </S.ContactInfo>
        <S.ContactButton>Get in touch</S.ContactButton>
      </S.ContactCard>
    </S.ContactSection>
  );
};

export default ContactSection;
