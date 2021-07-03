import React from 'react';
import {
  Container, Content, Title, ImageWrapper, BottomImage,
} from './styles';
import bottomImage from '../../assets/svg/logo-campanha-red.svg';

export const Footer = ({ title, content }) => (
  <Container>
    <div>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </div>
    <ImageWrapper><BottomImage src={bottomImage} /></ImageWrapper>
  </Container>
);
