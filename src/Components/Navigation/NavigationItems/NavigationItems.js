import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'
import FontAwesomeIcon from '../../UI/FontAwesomeIcon/FontAwesomeIcon';
import Auxiliary from '../../../Hoc/Auxiliary';

const NavigationItems = (props) => {
    const optionsCursorTrueWithMargin = {
        display: 'none'
    }

    return (
        <Auxiliary>
            <div className={classes.header__links}>
                <NavigationItem link='/'>Home</NavigationItem>
                <NavigationItem link='/' mouseOver >Company</NavigationItem>
                <div className={classes.companyIcon}>
                    <FontAwesomeIcon iconType='fas fa-caret-down' />
                </div>
                <div className={classes.userIcon}>
                    <FontAwesomeIcon iconType='fa fa-user' />
                </div>
                <NavigationItem link='/'>Support</NavigationItem>
            </div>
        </Auxiliary>
    )
}

export default NavigationItems; 