import React from 'react';
import Auxiliary from '../../Hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar/>
            {/* <SideDrawer/> */}
        </Auxiliary>
        
    )
}

export default Layout;