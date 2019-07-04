import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import About from './About';
import Background from '../img/download.png';

const styles = makeStyles({
  head: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    overFlow: "allow",
    backgroundSize: 'fill'
  }
})

function App() {
  const classes = styles();
  return (
    <div className={classes.head}>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList}/>
        <Route path='/newkeg' component={NewKegForm}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;