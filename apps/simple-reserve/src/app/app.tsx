import { stringify } from 'querystring';
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Navigation from './components/Navigation'
import { NavLink,Link,useLocation,useParams } from 'react-router-dom';
import Home from './Home';
import DefineRoute from './functions/Routes';
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
        main: colors.orange[600],
      },
      secondary: {
        main: colors.blue[600],
      },
      type: "light",
    },
  });


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline>
    <Header page={pathname} />
    <div>
      <NavLink exact to="/Setting">
        setting
      </NavLink>
      <NavLink exact to="/about">
        about
      </NavLink>
      <NavLink exact to="/home">
        home
      </NavLink>
      <DefineRoute />
      {/* <Count /> */}
    </div>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;