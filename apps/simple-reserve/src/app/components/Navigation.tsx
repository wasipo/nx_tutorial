import React from 'react';
import ReactDom from 'react-dom';
import {   
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import Home from '../Home';
import RouterElements from '../functions/Routes';


const Navigation: React.FC = () => (

  <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/Setting">Setting</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  </div>
  <Switch>
    <Route path="/Setting" component={RouterElements} />
    <Route path="/about" component={RouterElements} />
    <Route path="/users" component={RouterElements} />
  </Switch>


  </Router>

);



export default Navigation;