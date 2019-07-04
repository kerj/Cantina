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
                if (props.drinkType === 'Alcoholic') {
                   return <div>
                            <ul>
                                <li><strong>{props.drinks[index]['name']}</strong></li>
                                <li>{props.drinks[index]['brand']}</li>
                                <li>{props.drinks[index]['price']}</li>
                                <li>{props.drinks[index]['alcoCon']}</li>
                                <li>{props.drinks[index]['remaining']}</li>
                            </ul>
                            <Link to='/'><img src={props.drinks[index]['image']} alt="placeholder"/></Link>
                        </div>;
                } else {
                    return <div>
                            <ul>
                                <li><strong>{props.drinks[index]['name']}</strong></li>
                                <li>{props.drinks[index]['brand']}</li>
                                <li>{props.drinks[index]['price']}</li>
                                <li>{props.drinks[index]['name']}</li>
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