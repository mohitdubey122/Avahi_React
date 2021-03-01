import React, { Component } from 'react'
import classes from './Searchbar.css';
import FontAwesomeIcon from '../UI/FontAwesomeIcon/FontAwesomeIcon';

import Auxiliary from '../../Hoc/Auxiliary';
import Professionals from './Professionals/Professionals';

class Searchbar extends Component {
    state = {
        showProfessionals: false
    }

    showingProfessionals = () => {
        this.setState((prevState) => {
            return { showProfessionals: !prevState.showProfessionals }
        });
    }

    render() {
        return (
            <Auxiliary>
            <div className={classes.findProfessionals}>
                <span className={classes.searchIcon}><FontAwesomeIcon clicked={this.showingProfessionals} iconType='fa fa-search' iconClass='Search' /></span>
                <span ><input className={classes.searchText} type="text" placeholder="Find Architect,Interior Designers,Civil Contractors & more..." /></span>
            </div>
            <Professionals showProfessionals = {this.state.showProfessionals}/>
            </Auxiliary>
        )
    }
}

export default Searchbar;