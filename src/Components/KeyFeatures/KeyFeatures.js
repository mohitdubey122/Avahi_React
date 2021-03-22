import React from 'react';
import FontAwesomeIcon from '../UI/FontAwesomeIcon/FontAwesomeIcon';
import classes from './KeyFeatures.css';
import Auxiliary from '../../Hoc/Auxiliary';

const KeyFeatures = () => {
    return (
        <Auxiliary>
            <div className={classes.KeyFeatures}>
                <h1 className={classes.KeyFeatures_Heading}>OUR KEY FEATURES</h1>

                <div className={classes.KeyFeatures_Child}>

                    <div className={classes.Port}>
                        <FontAwesomeIcon iconType='fa fa-user customfont' iconClass='PortIcon'></FontAwesomeIcon>
                        <div className={classes.Port_Child}>
                            <p>Portfolio Management for construction professional</p>
                        </div>
                    </div>

                    <div className={classes.Project}>
                        <FontAwesomeIcon iconType="fa fa-pencil-square-o" iconClass='ProjectIcon'></FontAwesomeIcon>
                        <div className={classes.Project_Child}>
                            <p>Project Management for customers </p>
                        </div>
                    </div>

                    <div className={classes.Construction}>
                        <FontAwesomeIcon iconType="fa fa-link customfont" iconClass='ConstructionIcon'></FontAwesomeIcon>
                        <div className={classes.Construction_Child}>
                            <p>Construction trusted & verified professional</p>
                        </div>
                    </div>

                    <div className={classes.MobileEtracking}>
                        <FontAwesomeIcon iconType="fa fa-mobile customfont" iconClass='MobileIcon'></FontAwesomeIcon>
                        <div className={classes.MobileETracking_Child}>
                            <p>E-Tracking project report</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.your_way}>
                <h1 >YOUR WAY IN <span className={classes.simple_step}>4 SIMPLE STEP</span></h1>
            </div>
        </Auxiliary>

    )
}

export default KeyFeatures;
