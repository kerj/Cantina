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
        <div>
            <h1>{props.drinkType}</h1>
            <hr/>
            <div className={classes.keg}>
             {props.drinks.map((drink, index) => {
                if (index === props.drinks.length - 1) {
                    return <div>
                            <ul>
                                <li><strong>{props.drinks[index]}</strong></li>
                            </ul>
                            <Link to='/'><img src={props.image[0]} alt="placeholder"/></Link>
                            </div>;
                } else {
                    return <div>
                        <ul>
                            <li><strong>{props.drinks[index]}</strong></li>
                        </ul>
                        <Link to='/'><img src={props.image[0]} alt="placeholder"/></Link>;
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