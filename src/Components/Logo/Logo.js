import React from 'react';
import avahiLogo from '../../Assests/Images/Group_4.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.logo}>
        <img src={avahiLogo} alt="building" />
    </div>
)


export default logo;