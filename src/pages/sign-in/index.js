import React, { useRef, useState } from 'react';
import { Card } from '../../components/card';
import {
  Container, Content, TopContainer, TopImage,
} from './styles';
import topImage from '../../assets/img/clouds.png';
import { SigninForm } from './components/signin-form';
// import { Modal } from '../../components';
// import { signUpRequest } from '../../api';
import { Footer } from '../../components/footer';
import { loremIpsumOneParagraph } from '../../constants/loremipsum';

export const SignInPage = () => {
  const signInRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    alert('Não impĺementado');
  };

  return (
    <Container>
      <TopContainer>
        <Card
          onClickLeft={() => signInRef.current.scrollIntoView({ behavior: 'smooth' })}
          linkRight="/"
        />
        <TopImage alt="" src={topImage} />
      </TopContainer>

      <Content ref={signInRef}>
        <h1>Login</h1>
        <SigninForm handleSubmit={handleSubmit} />
      </Content>

      <Footer
        title="Só quem vende curte as experiências mais diferentonas!"
        content={loremIpsumOneParagraph}
      />
    </Container>
  );
};
