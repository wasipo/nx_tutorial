import React,{FC, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  Button, 
  makeStyles,
  TextField,
  FormControl,
  FormLabel,
  Grid,
  NativeSelect,Select, Box } from "@material-ui/core";
  import {InputWrapper} from '../../../css/styled/common';

const theme = {
  spacing: 8,
}


const useStyles = makeStyles((theme) => ({
  root: {
  },


}));


const StoreInfo: FC = () => {

  const { setValue, register,handleSubmit } = useForm();
  const classes = useStyles();

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
        <Grid container spacing={3} justify="center">
          <Grid item sm={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="storeName">店舗名</FormLabel>
              <TextField name="storeName" type="text" onChange={async e => setValue("storeName", e.target.value)} />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="holiday">定休日</FormLabel>
              <TextField name="holiday" type="text" onChange={async e => setValue("holiday", e.target.value)} />
            </FormControl>
          </Grid>
        </Grid>
      </InputWrapper>
      <Box mb={3}>
      <InputWrapper>
      <Grid container spacing={3} justify="center">
          <Grid item sm={6}>
            <FormControl variant="outlined" fullWidth>
              <FormLabel htmlFor="lastName">担当者名: 名</FormLabel>
              <TextField name="lastName" type="text" onChange={async e => setValue("lastName", e.target.value)} />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="firstName">担当者名: 性</FormLabel>
              <TextField name="firstName" type="text" onChange={async e => setValue("firstName", e.target.value)} />
            </FormControl>
          </Grid>
      </Grid>
      </InputWrapper>
      <InputWrapper>
      <Grid container spacing={3} justify="center">
          <Grid item sm={6}>
            <FormControl variant="outlined" fullWidth>
              <FormLabel htmlFor="lastName">始業時間</FormLabel>
              <TextField name="lastName" type="text" onChange={async e => setValue("lastName", e.target.value)} />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="firstName">終業時間</FormLabel>
              <TextField name="firstName" type="text" onChange={async e => setValue("firstName", e.target.value)} />
            </FormControl>
          </Grid>
      </Grid>
      </InputWrapper>
      </Box>
      <Box mx="auto" width="15%">
      <FormControl>
        <Button color="primary" variant="contained" type="submit">店舗設定完了</Button>
      </FormControl>
      </Box>
    </form>
  );

} 

export default StoreInfo;

// function useStyles() {
//   throw new Error('Function not implemented.');
// }

