import { Button, makeStyles,TextField } from "@material-ui/core";
import styled from 'styled-components';



export const StyledButton = styled(Button)`
  border-radius: 3px;
  border: 0;
  background-color: #eee;
  height: 48px;
  padding: 0 30px;
`;

export const TypeText = styled(TextField);


export const Input = styled.input.attrs({ type: 'submit' })`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
}`;

export const InputWrapper = styled.div`
padding: 10px;
background-color: #eee;
input {
  margin: 0 5px;
}
`;
