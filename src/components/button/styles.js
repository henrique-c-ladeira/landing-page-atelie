import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: #e6a727;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 15px 30px;
  cursor: pointer;
  
  font-size: 16px;
  font-weight: 600;

  &:active {
    transform: scale(0.95);
  }
`;
