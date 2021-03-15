import React from 'react';
import './Bonus.css';
import patton from './photo_with_Patton.jpg';

export default function Bonus() {
    return (
        <div className="intro">
            &nbsp; {/* non-breaking space */}
            <h1 
            style={{fontSize: 40}}
            className="intro_title">
            We would like to thank you for your time !
            </h1>
            &nbsp;
            <h1 className="intro_title">
            :)
            </h1>
            &nbsp;
            <img className="patton" src={patton} width="400" height="400" alt="GATE Team" />
            <div className="vertical_space"/>
        </div>
    )
}