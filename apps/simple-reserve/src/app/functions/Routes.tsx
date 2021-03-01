import React from 'react';
import {FC} from 'react';
import ReactDom from 'react-dom';
import {   
  Switch,
  Route,
  useParams,
  useRouteMatch,
  RouteComponentProps
} from 'react-router-dom';
import Home from '../Home';
import Setting from '../Setting';



const RouterElements: FC = () => {
  

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/Setting" datae="setting">
        <Setting />
      </Route>
    </Switch>
  )
};

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default RouterElements;