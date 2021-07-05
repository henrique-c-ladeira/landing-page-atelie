import styled from 'styled-components';
import backgroundImage from '../../assets/img/background.png';
import backgroundContent from '../../assets/img/background-marrom.png';

export const Container = styled.div`
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(min-width: 800px){
        flex-direction: row;
    }
    @media(max-width: 800px){
        padding-top: 35vh;
        padding-bottom: 35%;
    }
    background-image: url(${backgroundImage});
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
    max-width: 800px;
    padding-bottom: 50px;
`;

export const TopImage = styled.img`
    @media(max-width: 800px){
        position: absolute;
        max-width: 100%;
        right: 0;
        top: 0;
    }
    max-width: min(70%,800px);
    max-height: 100%;
    margin-top: 5vh;
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
    align-content: center;
`;

export const ErrorText = styled.span`
    color: #e6a727;
    font-weight: 900;
    font-size: 14px;
    padding: 0;
    margin: 0;
`;

export const FormFieldWrapper = styled.div`
    @media(min-width: 800px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
        padding:0px 150px;
    }
    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`;

export const Gap = styled.div`
    height: 25px;
`;
