import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    letters: {
        display: 'flex',
        color: '#2289dd',
        justifyContent: 'center'
    }  
})

export default function NewKegForm() {
    const classes = styles();
    return (
        <div className={classes.letters}>
            <form>
                <label>Keg Name
                    <input type="text"/>
                </label><br/>
                <label>Keg Brand
                    <input type="text"/>
                </label><br/>
                <label>Keg Alcohol Content
                    <input type="text"/>
                </label><br/>
                <label>Keg Price
                    <input type="text"/>
                </label><br/>
            <button>Add Keg to Rotation</button>
            </form>
        </div>
    )
}
