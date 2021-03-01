import React from 'react';
import FontAwesomeIcon from '../UI/FontAwesomeIcon/FontAwesomeIcon';
import classes from './Cards.css';

const Cards = (props) => {
    return (
        <div className={classes.Cards}>
            <div>
                <FontAwesomeIcon iconType='fas' iconClass='Pencil'>&#xf304;</FontAwesomeIcon>
                <a className={classes.Create_Profile} href="">Create Profile</a>
            </div>

            <div>
                <FontAwesomeIcon iconType='fa fa-check-circle' iconClass='Check'/>
                <a className={classes.Get_Profile} href="">Get Profile</a>
            </div>

            <div>
                <FontAwesomeIcon iconType='fas fa-user-tie' iconClass='UserTie'/>
                <a className={classes.Build_Your_Portfolio} href="">Build Your PortFolio</a>
            </div>

            <div>
                <FontAwesomeIcon iconType='fa fa-users accountfont' iconClass='ManyUser'/>
                <a className={classes.Get_Clients} href="">Get Clients/Customers</a>
            </div>
        </div>
    )
}

export default Cards;
