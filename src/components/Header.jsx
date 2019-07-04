import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    headerStyle: {
        color: '#16e999'
    }
})

export default function Header() {
    const classes = styles();
    return (
        <div>
            <NavBar/>
            <h1 className={classes.headerStyle}>Welcome to the Jek-Jek-Tar</h1>
        </div>
    )
}
