import styled from 'styled-components';
import { Link as RRDomLink } from 'react-router-dom';
import { ButtonStandard } from '../../styles';

export const CardImage = styled.img`
max-width: 230px;
z-index: 1;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonWrapper = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;

export const Link = styled(RRDomLink)`
  ${ButtonStandard}
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
