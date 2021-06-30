import React from 'react';
import cardImage from '../../../assets/svg/logo-camapanha-red-tagline.svg';
import { Button } from '../../../components/button';
import { ButtonWrapper, CardImage, ImageWrapper } from '../styles';

export const Card = () => (
  <>
    <ImageWrapper>
      <CardImage alt="" src={cardImage} />
    </ImageWrapper>
    <ButtonWrapper>
      <Button> Login </Button>
      <Button> Cadastre-se </Button>
    </ButtonWrapper>
  </>
);
