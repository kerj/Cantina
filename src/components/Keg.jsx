import React from 'react';
import PropTypes from 'prop-types';
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
        color: '#2289dd',
        listStyle: 'none'
    }    
})

export default function Keg(props) {
    const classes = styles();
    return (
        <div>
            <hr/>
            <ul className={classes.letters}>
                <li><strong>{props['name']}</strong></li>
                <li>Brewery: {props['brand']}</li>
                <li>Price: {props['price']}</li>
                <li>Aclohol Content: {props['alcoCon']}</li>
                <li>Remaining Pints: {props['remaining']}</li>
            </ul>
        </div>
       
    )
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    alcoCon: PropTypes.string,
    remaining: PropTypes.number
}