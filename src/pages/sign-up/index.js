import React, { useState } from 'react';
import { Card } from './components/card';
import {
  Container, Content, TopContainer, TopImage, ImageWrapper, ButtonWrapper,
} from './styles';
import topImage from '../../assets/img/clouds.png';
import { SignupForm } from './components/signup-form';
import { Modal } from '../../components';

export const SignUpPage = () => {
  const [modalVisible, setModalVisible] = useState(true);

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

      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </Container>
  );
};
