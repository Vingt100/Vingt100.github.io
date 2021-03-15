import React from 'react';
import './CV.css';

export default function EURECOM() {
    return (
        <>
        <div className="zero_point_five_cm_vertical_space"/>
        <div className="row">
            <h3>Selected field of study: <span className="red_text">Data Science</span></h3>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                className="logo_black_border" 
                src='/Logo/data-science-logo-icon.png' 
                width="200" height="200" 
                alt="Data_Science Logo" />
            </div>
            <div>
                <div className="zero_point_three_cm_vertical_space"/>
                <h4 style={{marginLeft: 25}}>Courses included/chosen in data science: </h4>
            <div className="zero_point_five_cm_vertical_space"/>
            <li>{/*<u>MALIS</u>:*/} <b className="red_text">Machine Learning & Intelligent Systems</b></li>
            <li><b className="red_text">Deep Learning</b></li>
            <li>{/*<u>DBSYS</u>:*/}  <b className="red_text">Database Management System Implementation</b></li>
            <li>{/*<u>AML</u>:*/}  <b className="red_text">Algorithmic for Machine Learning</b></li>
            <li>{/*<u>MALCOM</u>:*/}  <b className="red_text">MAchine Learning for COMmunication</b></li>
            <li><b className="red_text">Statistics</b></li>
            <li>{/*<u>ASI</u>:*/}  <b className="red_text">Advanced Statistical Inference</b></li>
            <li><b className="red_text">Clouds</b></li>
            </div>
        </div>
        </>
    )
}
