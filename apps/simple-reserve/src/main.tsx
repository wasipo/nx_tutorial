import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as MainRoute } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './app/reducers/TestReducer'
import App from './app/app';
import store from './app/Stores/TestStore'

ReactDOM.render(
  <React.StrictMode>
    <MainRoute>
      <Provider store={store}> 
        <App />
      </Provider>
    </MainRoute>
  </React.StrictMode>,
  document.getElementById('root')
);
