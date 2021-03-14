import { stringify } from 'querystring';
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import { NavLink,Link,useLocation,useParams } from 'react-router-dom';
import Home from './Home';
import Navigation from './components/NaviApp';
import store from './Stores/TestStore'
import { connect } from "react-redux";
import Count from './components/count'


import * as colors from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";



export function App() {

  const {pathname} = useLocation();
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#FFF',      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#FFF',      },
      type: "light",
    },
  });


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline>
    <Header page={pathname} />
    <Navigation page={pathname} />
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;