import React from 'react';
import { Card } from './components/card';
import {
  Container, Content, TopContainer, TopImage, ImageWrapper, ButtonWrapper,
} from './styles';
import topImage from '../../assets/img/clouds.png';
import { SignupForm } from './components/signup-form';

export const SignUpPage = () => {
  const keep = 0;

  return (
    <Container>
      <TopContainer>
        <Card />
        <TopImage alt="" src={topImage} />
      </TopContainer>

      <Content>
        <h1>Cadastre-se</h1>
        <p>
          Preencha os campos abaixo para validar
          sua participação na campanha e concorrer
          aos prêmios.
        </p>
        <SignupForm handleSubmit={(event) => { console.log(event); }} />
      </Content>
    </Container>
  );
};
