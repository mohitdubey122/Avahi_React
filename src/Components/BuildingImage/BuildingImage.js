import React from 'react';
import MainImage from '../../Assests/Images/IMG_20210125_174521.jpg';
import classes from './BuildingImage.css';

const BuildingImage = (props) => (
    <div className={classes.BuildingImage}>
        <img src={MainImage} alt="building"/> 
    </div>
)

export default BuildingImage;