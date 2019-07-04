import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    keg: {
        display: 'flex'
    }
        
    
})

export default function Keg(props) {
    const classes = styles();
    return (
        <div className={classes.keg}>
            {props.drinks.map((drink, index) => {
                if (index === props.drinks.length -1) {
                    return <Link to='/'><img src={props.image[0]} alt="placeholder"/>{drink.drinks}</Link>;
                } else {
                    return <Link to='/'><img src={props.image[0]} alt="placeholder"/>{drink.drinks}</Link>;
                }
            }
            )}
        </div>
    )
}

Keg.propTypes = {
    drinkType: PropTypes.string.isRequired,
    drinks: PropTypes.array.isRequired,
    image: PropTypes.array.isRequired
}