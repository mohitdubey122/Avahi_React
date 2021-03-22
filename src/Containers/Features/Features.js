import React, { Component } from 'react';
import SelectLocation from '../../Components/SelectLocation/SelectLocation';
import SearchBar from '../../Components/Seachbar/Searchbar';
import classes from './Features.css'

class Features extends Component {
    render() {
        return (
            <div className={classes.features}>
                <h1>YOU BELIEVE.WE CONNECT!</h1>
                <div className={classes.professionalInput}>
                    <SelectLocation />
                    <SearchBar />
                </div>
            </div>
        )
    }
}

export default Features
