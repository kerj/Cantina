import React from 'react'
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    letters: {
        color: '#2289dd'
    }
        
    
})


export default function About() {
    const classes = styles();
    return (
        <div className={classes.letters}>
            <h1>About The Jek-Jek-Tar</h1>
            <h3>Galactic Destination</h3>
            <hr/>
            <p>The Most dangerous bar in the Galaxy, 24/7 we pump 
                only the purest toxins into this spacers haven. A favorite
                amoung bounty hunters and those with bouties higher 
                than the 7 moons of Alderan. Come for its fumes or to collect
                one of the many bouties of the regulars (many try!) enjoy
                your stay!                
            </p>
        </div>
    )
}
