import React from 'react'
import { makeStyles, Grid } from '@material-ui/core';

const styles = makeStyles({
    letters: {
        color: '#2289dd',
        justifyContent: 'space-around',
        display: "flex",
        flexFlow: "row wrap",
    },
    paragraph: {
    
        width: '80%'
    },

    
})


export default function About() {
    const classes = styles();
    return (
        <div className={classes.letters}>
            <h1>About The Jek-Jek-Tar</h1>
            <h3 className={classes.paragraph}>Galactic Destination</h3>
            <hr/>
            <p className={classes.paragraph}>The Most dangerous bar in the Galaxy, 24/7 we pump 
                only the purest toxins into this spacers haven. A favorite
                amoung bounty hunters and those with bouties higher 
                than the 7 moons of Alderan. Come for its fumes or to collect
                one of the many bouties of the regulars (many try!) enjoy
                your stay!                
            </p>
        </div>
    )
}
