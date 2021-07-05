import React from 'react';
import cardImage from '../../assets/svg/logo-camapanha-red-tagline.svg';
import { Button } from '../button';
import {
  Link, CardContainer, ButtonWrapper, CardImage, ImageWrapper,
} from './styles';

export const Card = ({
  onClickLeft, onClickRight, linkLeft = false, linkRight = false,
}) => (
  <CardContainer>
    <ImageWrapper>
      <CardImage alt="" src={cardImage} />
    </ImageWrapper>
    <ButtonWrapper>
      {linkLeft
        ? <Link to={linkLeft}>Login</Link>
        : (
          <Button onClick={onClickLeft}>
            Login
          </Button>
        )}

      {linkRight
        ? <Link to={linkRight}>Cadastre-se</Link>
        : (
          <Button onClick={onClickRight}>
            Cadastre-se
          </Button>
        )}

    </ButtonWrapper>
  </CardContainer>
);
