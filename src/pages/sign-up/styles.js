import styled from 'styled-components';
import backgroundImage from '../../assets/img/background.png';
import cardImage from '../../assets/svg/logo-camapanha-red-tagline.svg';

export const Container = styled.div`
`;

export const TopContainer = styled.div`
    padding-top: 35vh;
    background-image: url(${backgroundImage});
    height: 100vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 20px;
    padding-bottom: 50px;
`;

export const CardImage = styled.img`
    width: 250px;
    z-index: 1;

`;

export const TopImage = styled.img`
    position: absolute;
    width: 100%;
    right: 0;
    margin-top: 5vh;
    top: 0;
`;
