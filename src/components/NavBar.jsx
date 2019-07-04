import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function NavBar(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  NavBar.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

  
  export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return(
        <div class="nav">
        <AppBar position="static" className="fb-row">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Home" component={Link} to="/"/>
                <Tab label="Add New Keg" component={Link} to="/newkeg"/>
                <Tab label="About us" component={Link} to="/about"/> 
            </Tabs>
        </AppBar>
        </div>
  
    );
}
