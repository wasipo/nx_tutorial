import PropTypes from 'prop-types';
import {
        Link,
        useLocation,
        useParams, 
        BrowserRouter as Router, 
        Switch, 
        Route, 
        useHistory} from 'react-router-dom';
import React,{FC} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RouterElements from '../functions/Routes';
import { makeStyles } from '@material-ui/core';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

type Props = {
  page: string;
}

const NaviApp:FC<Props> = ({page}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <div>
      <Router>
        <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={page} 
                onChange={handleChange} 
                aria-label="simple tabs example">
            <Tab label="Setting" value="/Setting" {...a11yProps(0)} component={Link} to="/Setting" />
            <Tab label="About" value="/About" {...a11yProps(1)} component={Link} to="/About" />
            <Tab label="Users" value="/Users" {...a11yProps(2)} component={Link} to="/Users" />
          </Tabs>
        </AppBar>
        </div>
        <Switch>
          <Route path="/Setting" component={RouterElements} />
          <Route path="/about" component={RouterElements} />
          <Route path="/users" component={RouterElements} />
        </Switch>
      </Router>
    </div>

  )

}


export default NaviApp;