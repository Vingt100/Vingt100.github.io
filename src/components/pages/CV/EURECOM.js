import React from 'react';
import './CV.css';

export default function EURECOM() {
    return (
        <>
        <div className="zero_point_five_cm_vertical_space"/>
        <div className="row">
            <h3 className="Ailly_h3">Selected field of study: <span className="red_text">Data Science</span></h3>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                className="Data_Science_logo" 
                src={process.env.PUBLIC_URL +'/Logo/data-science-logo-icon.png'}
                alt="Data_Science_Logo" />
            </div>
            <div>
                <div className="zero_point_three_cm_vertical_space"/>
                <h4 className="EURECOM_h4">Courses included/chosen in data science: </h4>
            <div className="zero_point_five_cm_vertical_space"/>
            <li><b className="red_text">Machine Learning & Intelligent Systems</b></li>
            <li><b className="red_text">Deep Learning</b></li>
            <li><b className="red_text">Database Management System Implementation</b></li>
            <li><b className="red_text">Algorithmic for Machine Learning</b></li>
            <li><b className="red_text">Machine Learning for Communication</b></li>
            <li><b className="red_text">Statistics</b></li>
            <li><b className="red_text">Advanced Statistical Inference</b></li>
            <li><b className="red_text">Clouds</b></li>
            </div>
        </div>
        </>
    )
}
