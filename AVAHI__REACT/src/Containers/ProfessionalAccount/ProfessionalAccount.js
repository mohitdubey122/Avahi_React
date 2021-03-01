import React, { Component } from 'react';
import Cards from '../../Components/Cards/Cards';
import Button from '../../Components/UI/Button/Button';
import FontAwesomeIcon from '../../Components/UI/FontAwesomeIcon/FontAwesomeIcon';
import classes from './ProfessionalAccount.css';

class ProfessionalAccount extends Component {
    render() {
        return (
            <div className={classes.ProfessionalAccount}>
                <div className={classes.ProfessionalAccount_Child}>
                    <h4>CREATE PROFESSIONAL ACCOUNT</h4>&nbsp;
                </div>
                <Cards />
                <div className={classes.Create_Button}>
                <Button>CREATE NOW <FontAwesomeIcon iconType='fas fa-arrow-alt-circle-right' iconClass='Right_Circle'/></Button>
                </div>
            </div>
        )
    }
}

export default ProfessionalAccount
