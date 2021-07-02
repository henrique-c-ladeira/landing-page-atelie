import styled from 'styled-components';
import backgroundImage from '../../../assets/img/background.png';
import backgroundContent from '../../../assets/img/background-marrom.png';

export const Container = styled.div`
`;

export const TopContainer = styled.div`
    padding-top: 35vh;
    background-image: url(${backgroundImage});
    height: 100%;
    padding-bottom: 35%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ButtonWrapper = styled.div`
    z-index: 1;
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
    width: 230px;
    z-index: 1;

`;

export const TopImage = styled.img`
    position: absolute;
    width: 100%;
    max-height: 100%;
    right: 0;
    margin-top: 5vh;
    top: 0;
`;

export const Content = styled.div`
    height: 100%;
    background-image: url(${backgroundContent});
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;

    h1 {
        font-size: 30px;
        font-weight: 900;
        text-transform: uppercase;
        text-align: center;
        padding: 30px;
        padding-bottom: 20px;
    }

    p {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        padding: 10px;
        padding-top: 0px;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding:0px 30px;
    gap: 25px;
`;

export const ErrorText = styled.span`
    color: #e6a727;
    font-weight: 900;
    font-size: 14px;
    padding: 0;
    margin: 0;
`;
