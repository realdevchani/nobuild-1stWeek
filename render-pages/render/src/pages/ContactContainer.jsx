import React from 'react';
import Title from './contact/Title';
import Form from './contact/Form';
import * as S from './Contact.style'


const ContactContainer = () => {
  return (
    <S.Container>
      <Title />
      <Form />
    </S.Container>
  );
};

export default ContactContainer;