import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <div className={classes.header__links}>
            <a>{props.children}</a>
        </div>
    )
}

export default NavigationItem;