import React from 'react';
import { Button } from '../../components/button';
import { Card } from './components/card';
import { Container, TopContainer, TopImage } from './styles';
import topImage from '../../assets/img/clouds.png';

export const SignUpPage = () => {
  const keep = 0;

  return (
    <Container>
      <TopContainer>
        <Card />
        <TopImage alt="" src={topImage} />
      </TopContainer>
    </Container>
  );
};
