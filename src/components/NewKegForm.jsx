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
        props.onAddingNewKeg({name: Name.value, brand: Brand.value, alcoholcontent: AlcoholContent.value, price: Price.value, id: v4(), image: placeholder});
        Name.value = "";
        Brand.value=  "";
        AlcoholContent.value = "";
        Price.value = "";
    }

    return (
        <div className={classes.letters}>
            <form onSubmit={handleNewKegFormSubmit}> 
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
                    id='alcoholContent'
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
        </div>
    )
}

NewKegForm.propTypes = {
    onAddingNewKeg: PropTypes.func
}