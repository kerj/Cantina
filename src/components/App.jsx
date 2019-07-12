import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import About from './About';
import KegControl from './KegControl';
import placeholder from '../img/placeholder.png';
import { v4 } from 'uuid';

// const styles = makeStyles({
//   head: {
//     backgroundImage: `url(${Background})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "bottom",
//     overFlow: "allow",
//     backgroundSize: 'fill'
//   }
// })


// const classes = styles();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {
        drinks: [
          {
            name: 'Jawa Juice',
            brand: 'Star Brew',
            price: '7',
            alcoCon: '5.5%',
            remaining: 124,
            id: v4(),
            image: placeholder
          },
          {
            name: 'Naboo Bug Juice',
            brand: 'Star Brew',
            price: '3',
            alcoCon: '5.5%',
            remaining: 124,
            id: v4(),
            image: placeholder
          },
          {
            name: 'Tatooine Bug Juice',
            brand: 'Star Brew',
            price: '2',
            alcoCon: '5.5%',
            remaining: 124,
            id: v4(),
            image: placeholder
          },
          {
            name: 'Juri Juice',
            brand: 'Star Brew',
            price: '5',
            alcoCon: '5.5%',
            remaining: 124,
            id: v4(),
            image: placeholder
          },
          {
            name: 'Zoochberry Juice',
            brand: 'Star Brew',
            price: '3',
            alcoCon: 'None',
            remaining: 124,
            id: v4(),
            image: placeholder
          },
          {
            name: 'Spacer Juice',
            brand: 'Star Brew',
            price: '5',
            alcoCon: 'None',
            remaining: 124,
            id: v4(),
            image: placeholder
          },
          {
            name: 'Jaffa Cider',
            brand: 'Star Brew',
            price: '8',
            alcoCon: 'None',
            remaining: 124,
            id: v4(),
            image: placeholder
          }
        ]
      },

    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleRemovePint = this.handleRemovePint.bind(this);
  }

  handleAddingNewKeg(newKeg) {
    var newMasterKegList = this.state.masterKegList.drinks.slice();
    newMasterKegList.push(newKeg);
    /*Chrome does not yet support spread? */
    // this.setState(stateToUpdate => ({
    //   newState:{
    //     ...stateToUpdate.newState,
    //     drinks: newMasterKegList
    //   }
    // }))
    this.setState(prevState => {
      let masterKegList = Object.assign({}, prevState.masterKegList);
      masterKegList.drinks = newMasterKegList;
      return { masterKegList }
    })

  }

  handleRemovePint(keg) {
    keg.remaining--;
    if (keg.remaining <= 0) {
      alert('sold out');
      keg.remaining++
    }
    this.setState(this.state.masterKegList);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList onRemovePint={this.handleRemovePint} kegList={this.state.masterKegList.drinks} />} />
          <Route path='/newkeg' render={() => <KegControl onAddingNewKeg={this.handleAddingNewKeg} />} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}
