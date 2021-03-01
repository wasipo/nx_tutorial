import React, { useEffect,FC } from 'react';
import {   
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    useRouteMatch,
    useLocation,
    useParams,
    RouteComponentProps
  } from 'react-router-dom';
import RouterElements from './functions/Routes';

const Home: FC = () => {



  return (
    <>
      <div>
        <Link to="/">
          <button>
            TOP
          </button>
        </Link>
        <Link to="/Setting">
          <button>
          設定画面
          </button>
        </Link>
      </div>
    </>
  )

};

function Topics() {
  const match = useRouteMatch();
  return (
      (match.url === '/') ?
      <div>予約システムTOP</div>
      : ''
  )
}

const RouteMatch = () => useRouteMatch();


export default Home;