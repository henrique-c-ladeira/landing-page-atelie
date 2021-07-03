import styled from 'styled-components';
import backgroundImage from '../../assets/img/background-cinza.png';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 20px 40px;
  @media (min-width: 800px){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    padding: 40px 250px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 24px;
  text-align: left;
  letter-spacing: 2px;

  padding: 10px 20px;

  @media (max-width: 800px){
    text-align: center;
    font-size: 18px;
  }
`;

export const Content = styled.div`
font-weight: 300;
font-size: 14px;
text-align: justify;

padding: 5px 5px;`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  padding: 20px;
`;

export const BottomImage = styled.img`
  height: 200px;

  @media(max-width: 800px){
    opacity: 0.15;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
  }
`;
