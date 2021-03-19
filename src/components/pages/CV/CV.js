import React from 'react';
import './CV.css';
import FGB from './FGB';
import Stage_Foch from './Stage_Foch';
import GATE_AFM from './GATE_AFM';
import EURECOM from './EURECOM';
import TSP from './TSP';
import Ailly from './Ailly';
import Internship_report from './Internship_report.pdf';

export default function CV() {
  return ( 
    <>
    <body className="body_margin">
    &nbsp;
      <div>
        <h1 className="title_style">More details about my CV</h1>
        <div className="zero_point_three_cm_vertical_space"/>
        <i><a 
             style={{color: "blue"}}
             className="center"
             href={Internship_report} 
             target="_blank">Click here to see my CV</a></i>
        <div className='row'>
        <ul className="table_of_contents_style">
            <div className="zero_point_five_cm_vertical_space"/>
            <li className="title_li"><a 
                                        className="SectionLink_without_deco"
                                        id="gotoTopFGB" href="#gotoFGB">The Georges Besse Foundation</a></li>
            <div className="zero_point_five_cm_vertical_space"/>
            <li className="title_li"><a 
                                        className="SectionLink_without_deco"
                                        id="gotoTopFoch" href="#gotoFoch">Data Science Internship at the Foch Hospital</a></li>
            <div className="zero_point_five_cm_vertical_space"/>
            <li className="title_li"><a
                                        className="SectionLink_without_deco" 
                                        id="gotoTopAFM" href="#gotoAFM">GATE - AFM Téléthon</a></li>
            <div className="zero_point_five_cm_vertical_space"/>
            <li className="title_li"><a
                                      className="SectionLink_without_deco" 
                                      id="gotoTopEURECOM" href="#gotoEURECOM">EURECOM</a></li>
            <div className="zero_point_five_cm_vertical_space"/>
            <li className="title_li"><a
                                      className="SectionLink_without_deco" 
                                      id="gotoTopTSP" href="#gotoTSP">TSP</a></li>
            <div className="zero_point_five_cm_vertical_space"/>
            <li className="title_li"><a
                                      className="SectionLink_without_deco" 
                                      id="gotoTopAilly" href="#gotoAilly">Prepatory Class - Pierre d'Ailly High School</a></li>
        </ul>
        </div>
      </div>
      <div className="one_cm_vertical_space"/>
      <div className="row">
      <div className="two_cm_vertical_space"/>
      <div>
        <h3 className="title"
        style={{marginRight:45, marginTop: 35}}>
            <a 
            className="SectionLink_without_deco"
            id="gotoFGB" href="#gotoTopFGB">
              I. The Georges Besse Foundation
              </a>
        </h3>
      </div>
      <div className="zero_point_five_cm_vertical_space"/>
      <div>
        <div
        className="title">
          <a 
            href="http://www.fondationbesse.com/fgb/"
            target="_blank"> {/* _blank to open in an other tab (onglet) */}
                        <img 
                          className="fgb_logo" 
                          src={process.env.PUBLIC_URL +'/Logo/logo_fgb.png'} 
                          alt="FGB logo"/>
            </a>
        </div>
      </div>
      </div>
      <FGB/>
      <div className="one_cm_vertical_space"/>
      <div>
        <h3 className="title"><a 
            className="SectionLink_without_deco"
            id="gotoFoch" href="#gotoTopFoch">
              II. Data Science Internship at the Foch Hospital
              </a>
        </h3>
      </div>
      <Stage_Foch/>
      <div className="one_cm_vertical_space"/>
      <div>
        <h3 className="title">
            <a 
            className="SectionLink_without_deco"
            id="gotoAFM" href="#gotoTopAFM">
              III. GATE - AFM Téléthon</a>
        </h3>
        <div className="zero_point_two_cm_vertical_space"/>
          <h4 style={{textAlign: "center"}}>
            <a 
            className="SectionLink_without_deco"
            href="https://gate.wp.telecom-sudparis.eu/"
            target="_blank">
              GATE stands in English for "Managing and Learning to Work in Teams"
              </a>
          </h4>
      </div>
      <GATE_AFM/>
      <div className="one_point_five_cm_vertical_space"/>
      <div className="row">
      <div>
        <h3 className="title"
        style={{marginRight:45, marginTop: 35}}>
          <p> <span style={{marginRight:30, color: "black"}} >2020-2022</span>  
            <a 
            className="SectionLink_without_deco"
            id="gotoEURECOM" href="#gotoTopEURECOM">
              IV. EURECOM
              </a></p>
        </h3>
      </div>
      <div className="zero_point_five_cm_vertical_space"/>
      <div>
        <div
        className="title">
          <a  
            href="https://www.eurecom.fr/"
            target="_blank"> {/* _blank to open in an other tab (onglet) */}
                        <img 
            className="EURECOM_logo" 
            src={process.env.PUBLIC_URL +'/Logo/eurecom_logo.png'}  
            alt="EURECOM logo"/>
            </a>
        </div>
      </div>
      </div>
      <EURECOM/>
      <div className="one_cm_vertical_space"/>
      <div className="row">
      <div>
        <h3 className="title" style={{marginRight:45, marginTop: 35}}>
          <p> <span style={{marginRight:30, color: "black"}} >2019-2020</span>
            <a 
            className="SectionLink_without_deco"
            id="gotoTSP" href="#gotoTopTSP">
              V. TSP
              </a></p></h3>
      </div>
      <div className="zero_point_five_cm_vertical_space"/>
      <div>
        <div className="title">
          <a  
            href="https://www.telecom-sudparis.eu/"
            target="_blank"><img 
            className="TSP_logo"
            src={process.env.PUBLIC_URL +'/Logo/Logo_TSP.jpg'}
            alt="TSP_logo"/></a>
        </div>
      </div>
      </div>
      <TSP/>
      <div className="one_cm_vertical_space"/>
      <div className="row">
        <div>
        <h3 className="title" style={{marginRight:45, marginTop: 15}}>
          <p> <span style={{marginRight:30, color: "black"}} >2017-2019</span>
            <a 
              className="SectionLink_without_deco"
              id="gotoAilly" href="#gotoTopAilly">VI.Prepatory Class - Pierre d'Ailly High School</a></p></h3>
        </div>
        <div className="zero_point_five_cm_vertical_space"/>
        <div>
          <div className="title">
            <a  
              href="http://dailly.lyc.ac-amiens.fr/"
              target="_blank"> {/* _blank to open in an other tab (onglet) */}
                          <img 
                            className="LPA_logo" 
                            src={process.env.PUBLIC_URL +'/Logo/LPA_logo.png'} 
                            alt="LPA_logo"/>
            </a>
        </div>
      </div>
      </div>
      <Ailly/>
      <div className="one_cm_vertical_space"/>
    </body>
  </>
  );
}