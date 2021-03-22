import React from 'react';
import classes from './FontAwesomeIcon.css'

const FontAwesomeIcon = (props) => {
    return (
        <i className={[[props.iconType], classes[props.iconClass]].join(' ')} onClick={props.clicked}>
            {props.children}
        </i>
    )
}

export default FontAwesomeIcon