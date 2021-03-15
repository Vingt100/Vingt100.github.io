import React from 'react';
import './CV.css';

export default function TSP() {
    return (
        <>
        <div className="zero_point_five_cm_vertical_space"/>
        <div className="row">
            <p style={{textAlign: "Center"}}>Two semesters of common core during which all students acquire the fundamental knowledge and skills of 
                the engineer. <br/>Scientific subjects, information and communication technologies are taught.<br/>
                Management sciences, languages and human sciences complete this teaching.</p>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                className="logo_black_border" 
                src='/Logo/math_logo.jpg' 
                width="110" height="110" 
                alt="Data_Science Logo" />
            </div>
            <div>
                <h4 style={{marginLeft: 25}}>Mathematics: </h4>
            <div className="zero_point_five_cm_vertical_space"/>
            <li><b className="red_text">Statistics & Data Analysis</b></li>
            <li><b className="red_text">Optimization</b></li>
            <li><b className="red_text">Probability</b></li>
            <li><b className="red_text">Elements of Analysis and Integration</b></li>
            </div>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                src='/Logo/computer_science_logo.png' 
                width="110" height="110" 
                alt="Data_Science Logo" />
            </div>
            <div>
                <div className="zero_point_three_cm_vertical_space"/>
                <h4 style={{marginLeft: 25}}>Computer Science: </h4>
            <div className="zero_point_five_cm_vertical_space"/>
            <li><b className="red_text">Algorithms and programming language (JAVA)</b></li>
            <li><b className="red_text">Introduction to Operating Systems (Unix shell - Bash)</b></li>
            <li><b className="red_text">Modeling (UML), Databases (SQL) and Information Systems</b></li>
            </div>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                className="logo_black_border"
                src='/Logo/Network_logo.png' 
                width="130" height="120" 
                alt="Network Logo" />
            </div>
            <div>
                <div className="zero_point_three_cm_vertical_space"/>
                <h4 style={{marginLeft: 25}}>Networks: </h4>
            <div className="zero_point_five_cm_vertical_space"/>
            <li><b className="red_text">Fixed and Mobile Telecommunications Networks</b></li>
            <li><b className="red_text">Data Networks</b></li>
            <li><b className="red_text">Network Performances</b></li>
            </div>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                className="logo_black_border" 
                src='/Logo/Physics_logo.jpg' 
                width="110" height="110" 
                alt="Data_Science Logo" />
            </div>
            <div>
                <div className="zero_point_three_cm_vertical_space"/>
                <h4 style={{marginLeft: 25}}>Physics: </h4>
            <div className="zero_point_five_cm_vertical_space"/>
            <li><b className="red_text">Electronic Systems and Functions</b></li>
            <li><b className="red_text">High-Frequencies</b></li>
            <li><b className="red_text">Optical Transmission Systems</b></li>
            </div>
        </div>
            
        </>
    )
}
