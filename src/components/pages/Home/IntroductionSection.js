import React from 'react';
import './Home.css';
import temp from './temp.png';

export default function IntroductionSection() {
    return (
        <div className="intro">
            <div className="one_cm_vertical_space"/>
            <h1 
            style={{fontSize: 40}}
            className="intro_title">
                Welcome to my Website 
            </h1>
            <div className="zero_point_eight_cm_vertical_space"/>
            <p className="zero_point_two_cm_vertical_space"><i>
                You can find here extended information about my CV, what projects I have done 
                (with code sources and explanation).</i></p>
            <p className="zero_point_two_cm_vertical_space"> For now, this website is not mobile friendly, but I am working on it.</p>
            <p> So, it is better to go on a computer to be able to view the site correctly.</p>
            <div className="row">
                <div>
                    <div className="zero_point_eight_cm_vertical_space"/>
                    <h3 style={{textAlign: "center"}}>
                        <p>I am a very curious person and willing to commit myself fully
                    to projects that I really enjoy.</p>
                     <p>Indeed, my main goal is to fully develop myself in my work and therefore to learn new things 
                     every day, which requires a great capacity of adaptation and perseverance.</p>  </h3>
                     <div className="zero_point_eight_cm_vertical_space"/>
                     <h3 style={{textAlign: "center"}}>
                        <p>I also spend time passing on my knowledge by giving lessons to secondary school students
                    (all the more necessary during the current health crisis), as well as reading numerous books on 
                    philosophy, science or history in order to better understand the world and myself.</p></h3>
                     </div>
            <img className="photo" 
            src={temp} 
            width="250" height="248" 
            alt="whaaaat" />
            </div>
            <div className="one_point_five_cm_vertical_space"/>
        </div>
    )
}
