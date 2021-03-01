import React from 'react';
import classes from './SelectLocation.css';

const SelectLocation = (props) =>
    (
        <div>
        <select name = "location" selected className = {classes.select} >
            <option value=""> LOCATION</option>
            <option value={props.value}>Hyderabad</option>
            <option value={props.value}>Warangal</option>
            <option value={props.value}>Khammam</option>
        </select >
        </div>
    )

export default SelectLocation;