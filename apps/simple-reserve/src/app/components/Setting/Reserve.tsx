import React from 'react';
import Header from '../Header'
import Form from '../Form';
import {Grid,Typography,Container,Box} from "@material-ui/core/";
import { connectProps } from '@devexpress/dx-react-core';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import Notes from '@material-ui/icons/Notes';
import Close from '@material-ui/icons/Close';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Create from '@material-ui/icons/Create';


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
    
  </Container>
  </>
  )


};


export default Reserve;