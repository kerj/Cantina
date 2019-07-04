import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

const styles = makeStyles({
  header: {
    color: 'red'
  }
})

function App() {
  const classes = styles();
  return (
    <div>
      <Header/>
        
      <Switch>
        <Route exact path='/' component={KegList}/>
        <Route path='/newKeg' component={NewKegForm}/>
      </Switch>
    </div>
  );
}

export default App;