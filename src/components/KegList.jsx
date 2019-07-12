import React from 'react'
import Keg from './Keg';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { v4 } from 'uuid';


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
                <div>
                    <Keg
                        name={keg.name}
                        brand={keg.brand}
                        price={keg.price}
                        alcoCon={keg.alcoCon}
                        remaining={keg.remaining}
                        image={keg.image}
                        key={v4()}
                    />
                    <button onClick={() => props.onRemovePint(keg)}>Buy a pint</button>
                </div>
            )}
        </div>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onRemovePint: PropTypes.func
}
