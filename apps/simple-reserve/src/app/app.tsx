import { stringify } from 'querystring';
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import DefineRoute from './functions/Routes';
import store from './Stores/TestStore'
import { connect } from "react-redux";
import Count from './components/count'




export function App() {
  
  return (
    <div>
      <Link to="/Setting">
        setting
      </Link>
      <Link to="/about">
        about
      </Link>
      <Link to="/home">
        home
      </Link>
      <DefineRoute />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return { 
//     count: state.count
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => dispatch({ type: "INCREASE_COUNT" }),
//     decrease: () => dispatch({ type: "DECREASE_COUNT" }),
//   };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(App);

export default App;