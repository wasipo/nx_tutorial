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
import Store from '../components/Setting/Store';
import Reserve from '../components/Setting/Reserve';



const RouterElements: FC = () => {
  

  return (
    <Switch>
      <Route path="/Reserve">
        <Reserve />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/Store" datae="Store">
        <Store />
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