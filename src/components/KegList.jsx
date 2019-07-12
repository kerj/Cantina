import React from 'react'
import placeholder from '../img/placeholder.png';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    drinkHeader: {
        color: 'whitesmoke'
    }
})

export default function KegList(props) {
    const classes = styles();
    return (
        <div>
            <h1>Drink Menu</h1>
            {props.kegList.map((keg) =>
                {   
                    <Keg 
                    name={keg.brand} 
                    brand={keg.brand} 
                    price={keg.price}
                    alcoCon={keg.alcoCon} 
                    remaining={keg.remaining} 
                    image={keg.image}
                    key={keg.id}
                    />
                }
                )}
        </div>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array
}
