import React, { useRef, useState } from 'react';
import { Card } from '../../components/card';
import {
  Container, Content, TopContainer, TopImage,
} from './styles';
import topImage from '../../assets/img/clouds.png';
import { SignupForm } from './components/signup-form';
import { Modal } from '../../components';
import { signUpRequest } from '../../api';
import { Footer } from '../../components/footer';
import { loremIpsumOneParagraph } from '../../constants/loremipsum';

export const SignUpPage = () => {
  const signUpRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSubmit = async (form) => {
    setModalVisible(true);
    setLoading(true);
    const created = await signUpRequest(form);

    if (created) setUserMsg('Cadastro realizado com sucesso!');
    else setUserMsg('Ocorreu um erro.');

    setLoading(false);
  };

  return (
    <Container>
      <TopContainer>
        <Card
          linkLeft="/login"
          onClickRight={() => signUpRef.current.scrollIntoView({ behavior: 'smooth' })}
        />
        <TopImage alt="" src={topImage} />
      </TopContainer>

      <Content ref={signUpRef}>
        <h1>Cadastre-se</h1>
        <p>
          Preencha os campos abaixo para validar
          sua participação na campanha e concorrer
          aos prêmios.
        </p>
        <SignupForm handleSubmit={handleSubmit} />
      </Content>

      <Footer
        title="Só quem vende curte as experiências mais diferentonas!"
        content={loremIpsumOneParagraph}
      />

      <Modal
        loading={loading}
        message={userMsg}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Container>
  );
};
