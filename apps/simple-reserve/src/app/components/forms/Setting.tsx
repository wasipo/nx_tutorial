import React,{FC, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { Button, makeStyles,TextField,FormControl,FormLabel } from "@material-ui/core";
import { InputWrapper,Input,StyledButton,TypeText } from '../../css/styled/common';
import styled from 'styled-components';


const Setting: FC = () => {

  const { setValue, register,handleSubmit } = useForm();
  
  const onSubmit = data => console.log(data);
  useEffect(() => {
    register({ name: "storeName", type: "custom" }, { required: true });
    register({ name: "firstName", type: "custom" }, { required: true });
    register({ name: "lastName", type: "custom" }, { required: true });
    register({ name: "holiday", type: "custom" }, { required: true });
  }, [register]);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <FormControl>
          <FormLabel htmlFor="storeName">店舗名</FormLabel>
          <TextField name="storeName" type="text" onChange={async e => setValue("storeName", e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="firstName">担当者名: 性</FormLabel>
          <TextField name="firstName" type="text" onChange={async e => setValue("firstName", e.target.value)} />
        </FormControl>
      </InputWrapper>
      <InputWrapper>
          <FormControl>
            <FormLabel htmlFor="lastName">担当者名: 名</FormLabel>
            <TextField name="lastName" type="text" onChange={async e => setValue("lastName", e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="holiday">定休日</FormLabel>
            <TextField name="holiday" type="text" onChange={async e => setValue("holiday", e.target.value)} />
          </FormControl>
      </InputWrapper>
      <FormControl>
        <StyledButton type="submit">Styled Components</StyledButton>
      </FormControl>
    </form>
  );

} 

export default Setting;

