import React from 'react';
import './CV.css';

export default function TSP() {
    return (
        <>
        <div className="zero_point_five_cm_vertical_space"/>
        <div className="row">
            <p className="TSP_intro_mobile_text" style={{textAlign: "Center"}}>Two semesters of common core during which all students acquire the fundamental knowledge and skills of 
                the engineer. <br/>Scientific subjects, information and communication technologies are taught.<br/>
                Management sciences, languages and human sciences complete this teaching.</p>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                className="Math_logo" 
                src={process.env.PUBLIC_URL +'/Logo/math_logo.jpg'}
                alt="Math_logo" />
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
                className="Computer_Science_logo" 
                src={process.env.PUBLIC_URL +'/Logo/computer_science_logo.png'}
                alt="Computer_Science_logo" />
            </div>
            <div>
                <div className="zero_point_three_cm_vertical_space"/>
                <h4 style={{marginLeft: 25}}>Computer Science: </h4>
            <div className="zero_point_five_cm_vertical_space"/>
            <li><b className="red_text">Learning of JAVA</b></li>
            <li><b className="red_text">Learning of Unix shell - Bash</b></li>
            <li><b className="red_text">Modeling (UML), Databases (SQL) and Information Systems</b></li>
            </div>
        </div>
        <div className="zero_point_eight_cm_vertical_space"/>
        <div className="row">
            <div style={{marginRight: 50}}>
                <img 
                className="Network_logo"
                src={process.env.PUBLIC_URL +'/Logo/Network_logo.png'}
                alt="Network_logo" />
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
                className="Physics_logo" 
                src={process.env.PUBLIC_URL +'/Logo/Physics_logo.jpg'}
                alt="Physics_logo" />
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
