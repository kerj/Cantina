import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { v4 } from 'uuid'; 
import placeholder from '../img/placeholder.png'

const styles = makeStyles({
    letters: {
        display: 'flex',
        color: '#2289dd',
        justifyContent: 'center'
    }  
})

export default function NewKegForm(props) {
    let Name = null;
    let Brand = null;
    let AlcoholContent = null;
    let Price = null;

    const classes = styles();

    function handleNewKegFormSubmit(e){
        e.preventDefault();
        props.onAddingNewKeg({name: Name.value, brand: Brand.value, alcoCon: AlcoholContent.value, price: Price.value, remaining: 124, id: v4(), image: placeholder});
        Name.value = "";
        Brand.value=  "";
        AlcoholContent.value = "";
        Price.value = "";
    }
    return (
        <div className={classes.letters}>
            <form onSubmit={handleNewKegFormSubmit}> 
                <h3>Add a Keg</h3>
                <label>Keg Name
                    <input
                    id='name'
                    ref={(input) => {Name = input;}}
                    type="text"
                    />
                </label><br/>
                <label>Keg Brand
                    <input 
                    id='brand'
                    ref={(input) => {Brand = input;}}
                    type="text"
                    />
                </label><br/>
                <label>Keg Alcohol Content
                    <input 
                    id='alcoCon'
                    ref={(input) => {AlcoholContent = input;}}
                    type="text"
                    />
                </label><br/>
                <label>Keg Price
                    <input 
                    id='price'
                    ref={(input) => {Price = input;}}
                    type="text"
                    />
                </label><br/>
            <button type='submit'>Add Keg to Rotation</button>
            </form>
            <h3>Edit A Keg</h3>

        </div>
    )
}

NewKegForm.propTypes = {
    onAddingNewKeg: PropTypes.func
}