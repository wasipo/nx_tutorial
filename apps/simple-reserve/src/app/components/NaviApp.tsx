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
import {AppBar,Tabs,Tab,Typography,Box} from '@material-ui/core/';
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
        <Box mb={3}>
          <AppBar position="static">
            <Tabs value={page} 
                  onChange={handleChange} 
                  aria-label="simple tabs example">
              <Tab label="店舗情報設定" value="/Store" {...a11yProps(0)} component={Link} to="/Store" />
              <Tab label="予約枠設定" value="/Reserve" {...a11yProps(1)} component={Link} to="/Reserve" />
              <Tab label="Users" value="/Users" {...a11yProps(2)} component={Link} to="/Users" />
            </Tabs>
          </AppBar>
        </Box>
        <Switch>
          <Route path="/Store" component={RouterElements} />
          <Route path="/Reserve" component={RouterElements} />
          <Route path="/users" component={RouterElements} />
        </Switch>
      </Router>
    </div>

  )

}


export default NaviApp;