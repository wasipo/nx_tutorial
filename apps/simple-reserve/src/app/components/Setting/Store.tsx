import React from 'react';
import Header from '../Header/Setting'
import Form from '../Form';
import {Grid,Typography,Container,Box} from "@material-ui/core/";


const Store: React.FC = () => {
    
    return (
        <>
        <Container fixed>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="h6" color="textPrimary">
                店舗情報設定フォーム
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* <Box width="67%" mx="auto"> */}
            <Form page="StoreInfo" />
          {/* </Box> */}
        </Container>
        </>
    )

};


export default Store;