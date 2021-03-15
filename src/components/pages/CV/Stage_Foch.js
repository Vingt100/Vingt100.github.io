import React from 'react';
import './CV.css';
import Internship_report from './Internship_report.pdf';

export default function Stage_Foch () { 
        return (
            <>
            <div>
                <div className="one_cm_vertical_space"/> 
                <div className='row' style={{justifyContent: "center"}}>
                   <div>
                   <h4>
                        Duration: 8 weeks (from 15/06/2020 to 07/08/2020)
                    </h4>
                    <div className="zero_point_two_cm_vertical_space"/>
                    <h4>Tuteurs:</h4>
                    <ul style={{marginLeft: 100}}>
                        <li>
                            Professor Fischler (PUPH)
                        </li>
                        <li>
                            Mister Trillat (DISI)
                        </li>
                        <li>
                            Doctor Saad
                        </li>
                    </ul>
                    <div className="zero_point_two_cm_vertical_space"/>
                    <h4>
                    Working in pairs
                    </h4>
                   </div>
                   <div>
                   <a 
              className="title" 
              href="https://www.hopital-foch.com/"
              target="_blank">
                        <img src='/Logo/Logo_HOPITAL_FOCH.png' width="230" height="120" alt="Foch Hospital Logo" /></a>
                   </div>
                </div>
                </div>
                <div className="one_cm_vertical_space"/>
                <div className='row' style={{justifyContent: "center"}}>
                    <div>
                    <p>
                    <u><i>Topic</i></u>: 
                    <p style={{marginLeft: 80}}>
                        Research of factors (demographic, biological, medicinal, etc.) that can influence hypothermia 
                        during a clinical stay.
                    </p>
                    <p style={{marginLeft: 80}}>
                        Work on a database containing <b>400 variables</b> and <b>10336 observations</b> with
                        the <b style={{color: "red"}}>R language</b> (in RStudio).
                    </p>
                    </p>
                    &nbsp;
                    <p>
                    <u><i>What I did</i></u>:
                    <ol style={{marginLeft: 100}}>
                        <li>
                            <b>Data analysis</b>: 
                            <ul style={{marginLeft: 100}}>
                                <li>
                                    Data cleaning (outliers, wrong/erroneous values).
                                </li>
                                <li>
                                    Missingness Mechanism.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <b>Univariate analyses</b>.
                        </li>
                        <li>
                            <b>Multivariate analyses</b>.
                        </li>
                    </ol>
                    </p>
                    <div className="zero_point_five_cm_vertical_space"/>
                    <a 
                    style={{color: "blue"}}
                    className="SectionLink"
                    href={Internship_report} 
                    target="_blank">Click to see the non-technical internship report</a> {/*download*/}
                    <div className="zero_point_two_cm_vertical_space"/>
                    <a 
                    style={{color: "blue"}}
                    className="SectionLink"
                    href={Internship_report} 
                    target="_blank">Click to see the technical internship report</a> {/*download*/}
                    </div>
                </div>
            </>
        );
    }

