import React from 'react';
import Header from '../Header'
import Form from '../Form';
import {Grid,Typography,Container,Box} from "@material-ui/core/";
import Calendar from '../forms/Calendar';

const Reserve: React.FC = () => {

return (
  <>
  <Container fixed>
    <Grid container justify="center">
      <Grid item xs={12}>
        <Box mb={2}>
          <Typography variant="h6" color="textPrimary">
          予約枠設定画面
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Calendar />
  </Container>
  </>
  )


};


export default Reserve;