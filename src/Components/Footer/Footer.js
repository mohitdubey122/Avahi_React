import React from 'react';
import classes from './Footer.css';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Footer_Children}>
                <a href="">About us | </a>
                <a href=""> Blog |</a>
                <a href="">Terms & Conditions |</a>
                <a href=""> Careers |</a>
                <a href="">Privacy policy </a>
            </div>
            <div className={classes.Footer_Statement}>
                <p>Copyrights.All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer; 
