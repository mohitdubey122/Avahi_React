import React from 'react';
import classes from './Professionals.css';
import propertyDealerImage from '../../../Assests/Images/Image_1.png';
import architectImage from '../../../Assests/Images/Image_2.png';
import interiorDesignerImage from '../../../Assests/Images/Screenshot.png';
import civilEngineerImage from '../../../Assests/Images/civil_engineer.png';
import contractorImage from '../../../Assests/Images/contractor.png';

const Professionals = (props) => {
    return (
        props.showProfessionals == true ? (
            <div className={classes.Professionals}>
            <div className={classes.Property_Dealers}>
                <a href="land/property dealers">
                    <div className={classes.Property_Dealers_Architecture}>
                        <img src={propertyDealerImage} alt='smiley' />
                        <h4>Land/Property Dealers.</h4>
                    </div>
                </a>
            </div>

            <div className={classes.Architects}>
                <a href="Architects">
                    <div className={classes.Architects_child}>
                        <img src={architectImage} alt='smiley' />
                        <h4> Architects.</h4>
                    </div>
                </a>
            </div>

            <div className={classes.Interior_Designers}>
                <a href="Interior_designers">
                    <div className={classes.Interior_Designers_Child}>
                        <img src={interiorDesignerImage} alt='smiley' />
                        <h4>Interior Designers.</h4>
                    </div>
                </a>
            </div>

            <div className={classes.Civil_Engineer}>
                <a href="civil_eng">
                    <div className={classes.Civil_Engineer_Child}>
                        <img src={civilEngineerImage} alt='smiley' />
                        <h4>Civil Engineers.</h4>
                    </div>
                </a>
            </div>

            <div className={classes.Contractors}>
                <a href="contractors">
                    <div className={classes.Contractors__child}>
                        <img src={contractorImage} alt='smiley' />
                        <h4>Contractors.</h4>
                    </div>
                </a>
            </div>
        </div>
        ) : null 
    )
}

export default Professionals
