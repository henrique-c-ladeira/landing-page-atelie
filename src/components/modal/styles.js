import styled from 'styled-components';

export const Container = styled.div`
    background-color: red;
    position: absolute;
    top: 50%;
    right: 50%;
    text-align: center;

`;

export const CloseButton = styled.button.attrs({
  type: 'button',
})`
    position: absolute;
    color: white;
    background: transparent;
    top: 10px;
    right: 2%;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.85);
    }
`;
