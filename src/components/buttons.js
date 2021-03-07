import styled from 'styled-components';
import {primaryColor,secondaryColor,primaryHoverColor} from '../styles/colors';


export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s linear, color 0.2s linear;
  border-radius:4px;
  &:hover {
    background-color: ${primaryHoverColor};
    color: ${secondaryColor};
  }
  &:focus {
    outline: 0px solid ${primaryColor};
    border-radius:4px
  }
  &:active {
    background-color: ${primaryColor};
    border-color: ${primaryColor};
    color: ${secondaryColor};
  }
`;


export const PrimaryButton=styled(Button)`
background-color:${primaryColor};
color:${secondaryColor};
border: 2px solid transparent;
`

