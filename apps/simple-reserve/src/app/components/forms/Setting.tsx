import React,{FC} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Setting: FC = () => {

  const {register,handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label htmlFor="storeName">店舗名</label>
        <input name="storeName" type="text" ref={register} />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="firstName">担当者名: 性</label>
        <input name="firstName" type="text" ref={register} />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="lastName">担当者名: 名</label>
        <input name="lastName" type="text" ref={register} />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="holiday">定休日</label>
        <input name="holiday" type="text" ref={register} />
      </InputWrapper>
      <InputWrapper>
        <input type="submit" />
      </InputWrapper>
    </form>
  );

} 

export default Setting;

const InputWrapper = styled.div`
padding: 10px;
background-color: #eee;
input {
  margin: 0 5px;
}
`;