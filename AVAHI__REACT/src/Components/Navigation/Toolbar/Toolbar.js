import React from 'react';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css'

const Toolbar = (props) => {
    return (
        <header className={classes.header}>
            {/* <DrawerToggle/> */}
                <Logo />
                <NavigationItems />
            {/* <nav className={classes.DesktopOnly}>
            </nav> */}
        </header>
    )
}

export default Toolbar;