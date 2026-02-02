import React, { useState } from 'react';
import * as S from './Form.style';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 폼 제출 로직 구현
    console.log('Form submitted:', formData);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.Label htmlFor="name">이름</S.Label>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="ex: nobulider"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.Label htmlFor="email">이메일 주소</S.Label>
        <S.Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ex: nobulider@example.com"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.Label htmlFor="phone">연락처</S.Label>
        <S.Input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="ex: 010-1234-1234"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.Label htmlFor="message">Tell me about it</S.Label>
        <S.Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="내용을 입력해주세요."
          rows={6}
        />
      </S.InputContainer>

      <S.Submit type="submit">Submit</S.Submit>
    </S.Form>
  );
};

export default Form;