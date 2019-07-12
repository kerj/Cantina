import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { v4 } from 'uuid';

const styles = makeStyles({
    keg: {
        display: 'flex',
        backgroundColor: 'whitesmoke',
        opacity: ".3",
        flexWrap: "wrap",
        border: "2px"
    },
    letters: {
        color: '#2289dd',
        listStyle: 'none'
    }
        
    
})

export default function Keg(props) {
    const classes = styles();
    
    function removePint(theDrink){
    
    };

    return (
        <div>
            <h3 className={classes.letters}>{props.drinkType}</h3>
            <hr/>
            <div className={classes.keg}>
                 <div>
                    <ul className={classes.letters}>
                        <li><strong>{props.drinks['name']}</strong></li>
                        <li>Brewery: {props.drinks['brand']}</li>
                        <li>Price: {props.drinks['price']}</li>
                        <li>Aclohol Content: {props.drinks['alcoCon']}</li>
                        <li>Remaining Pints: {props.drinks['remaining']}</li>
                        <button onClick={removePint(props.drinks['remaining'])}>Buy!</button>
                    </ul>
                <Link to='/'><img src={props.drinks['image']} alt="placeholder"/></Link>
                </div>
            </div>

        </div>
       
    )
}

Keg.propTypes = {
    drinks: PropTypes.array.isRequired,
}