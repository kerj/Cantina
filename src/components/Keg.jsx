import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    keg: {
        display: 'flex',
        backgroundColor: 'whitesmoke',
        opacity: ".3",
        flexWrap: "wrap",
        border: "2px"
    },
    letters: {
        color: '#2289dd'
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
             {props.drinks.map((drink, index) => {
                if (props.drinkType === 'Alcoholic') {
                   return <div>
                                <ul className={classes.letters}>
                                    <li><strong>{props.drinks[index]['name']}</strong></li>
                                    <li>Brewery: {props.drinks[index]['brand']}</li>
                                    <li>Price: {props.drinks[index]['price']}</li>
                                    <li>Aclohol Content: {props.drinks[index]['alcoCon']}</li>
                                    <li>Remaining Pints: {props.drinks[index]['remaining']}</li>
                                    <button onClick={removePint(props.drinks[index]['remaining'])}>Buy!</button>
                                </ul>
                            <Link to='/'><img src={props.drinks[index]['image']} alt="placeholder"/></Link>
                            </div>;
                } else{
                    return <div>
                                <ul className={classes.letters}>
                                    <li><strong>{props.drinks[index]['name']}</strong></li>
                                    <li>Brewery: {props.drinks[index]['brand']}</li>
                                    <li>Price: {props.drinks[index]['price']}</li>
                                    <li>Remaining Pints: {props.drinks[index]['remaining']}</li>
                                    <button onClick={removePint(props.drinks[index]['remaining'])}>Buy!</button>
                                </ul>
                            <Link to='/'><img src={props.drinks[index]['image']} alt="placeholder"/></Link>
                            </div>;
                        }
                    }
                )}
            </div>

        </div>
       
    )
}

Keg.propTypes = {
    drinkType: PropTypes.string.isRequired,
    drinks: PropTypes.array.isRequired,
    image: PropTypes.array.isRequired
}