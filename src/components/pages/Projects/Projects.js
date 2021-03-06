import React from 'react';
import './Projects.css';
import PRO3600_Rapport from './PRO3600-17_Rapport.pdf';
import MALIS_Report from './Final_report_MALIS.pdf';

export default function Projects() {
    return (
        <body className="body_margin">
            &nbsp; {/* non-breaking space */}
            <div>
            <h1 style={{fontSize: 40}} className="title">Details about scholar & personal projects</h1>
            <div className="zero_point_five_cm_vertical_space"/>
            <div className='row'>
            <ul className="table_of_contents_style">
                <div className="zero_point_five_cm_vertical_space"/>
                <li className="title_li">
                <a 
                className="SectionLink_without_deco"
                id="gotoTopEURECOM" href="#gotoEURECOM">EURECOM</a></li>
                <div className="zero_point_two_cm_vertical_space"/>
                <ul  
                className="subtable_of_contents_style">
                  <li className="sub_title_li"><a 
                                            className="SectionLink_without_deco"
                                            id="gotoTopCovid" href="#gotoCovid">Covid-19 Statistic WebSite</a>
                  </li> 
                  <div className="zero_point_two_cm_vertical_space"/>
                  <li className="sub_title_li"><a 
                                            className="SectionLink_without_deco"
                                            id="gotoTopMWD" href="#gotoMWD">Masked Face Detection</a>
                  </li>
                </ul>
                <div className="zero_point_two_cm_vertical_space"/>
                <li className="title_li"><a 
                                          className="SectionLink_without_deco"
                                          id="gotoTopTSP" href="#gotoTSP">
                                          TSP (Télécom SudParis)</a></li>
                <div className="zero_point_two_cm_vertical_space"/>
                <ul  
                className="subtable_of_contents_style">
                  <li className="sub_title_li"><a 
                                            className="SectionLink_without_deco"
                                            id="gotoTopStocks" href="#gotoStocks">
                      Android App - Inventory management
                    </a>
                  </li> 
                  <div className="zero_point_two_cm_vertical_space"/>
                </ul>
                {/* <li><a
                className="SectionLink_without_deco" 
                id="gotoTopAFM" href="#gotoAFM">
                ???</a></li> */}
            </ul>
        </div>
        </div>
        <div className="one_cm_vertical_space"/>
        <div>
        <h3 className="title">
            <a 
            className="SectionLink_without_deco"
            id="gotoEURECOM" href="#gotoTopEURECOM">
              I. EURECOM
              </a>
        </h3>
        </div>
        <div className="zero_point_five_cm_vertical_space"/>
        <div className="row">
        <div>
         <a href="https://www.eurecom.fr/" target="_blank">
          <img 
            className="EURECOM_logo" 
            src={process.env.PUBLIC_URL +'/Logo/eurecom_logo.png'}
            alt="EURECOM_logo"/></a>
          </div>
          <div 
          style={{marginTop:20, marginRight:20, marginLeft: 20}}>
            <h3 style={{textAlign: "center"}}><a  
            className="SectionLink_without_deco"
            href="https://github.com/LabarreEurecom?tab=repositories"
            target="_blank">Link to Github for my Eurecom Projects</a></h3>
          </div>
          <div> {/* _blank to open in an other tab (onglet) */}
                        <img 
            className="GitHub_logo" 
            src={process.env.PUBLIC_URL +'/Logo/GitHub_logo.png'}
            width="60" height="60" 
            alt="GitHub_logo"/>
          </div>
        </div>
        <div className="one_cm_vertical_space"/>
                <div className="row">
                <div className="zero_point_eight_cm_vertical_space"/>
                <div>
                  <div className="row">
                  <div>
                      <h3 
                      className="title"
                      style={{textAlign: 'center'}}>
                          <a 
                              className="SectionLink_without_deco"
                              id="gotoCovid" href="#gotoTopCovid">A. Masked Face detection</a></h3>
                      <div className="zero_point_eight_cm_vertical_space"/>
                      <h4 style={{textAlign: "center"}}> Detection of mask wearing during the Covid-19 health crisis.
                      </h4>
                      <div>
                    <iframe 
                    className="MWD_mobile_ytb"
                    src="https://youtube.fr/embed/N27kOUE0Qw8" // don't forget to put "embed/"
                    frameborder="0"
                    allowFullScreen>
                    </iframe>
                </div>
                      <div className="zero_point_eight_cm_vertical_space"/>
                      <p className="fifteen_px_mobile_text">The aim of this project was to detect the wearing of masks in order to be able to secure
                        high-risk places (such as retirement homes for example). The code was done with <b>python</b>.</p> 
                      <div className="zero_point_two_cm_vertical_space"/>
                      <div style={{marginLeft:50}} className="zero_point_two_cm_vertical_space">
                        <div className="zero_point_two_cm_vertical_space"/>
                      <li className="fifteen_px_mobile_text">Firstly, I worked on images 
                      (<b>static detection</b>) with the first step being to be able to determine
                        whether the person is wearing the mask or not.</li>
                        <div className="zero_point_two_cm_vertical_space"/>
                      <li className="fifteen_px_mobile_text">The second step was to distinguish more precisely 
                      whether that person is wearing the mask correctly
                      or not (bearing in mind that the mask must completely cover the chin and nose).</li>
                      <div className="zero_point_two_cm_vertical_space"/>
                      <li className="fifteen_px_mobile_text">Secondly, I wanted to extend this work by 
                      detecting the wearing of the mask on videos (dynamic detection).
                        But actually I only performed a <b>semi-dynamic detection</b> (must click on a button for the determination).
                      </li>
                      </div>
                      <div className="zero_point_five_cm_vertical_space"/>
                      <p className="fifteen_px_mobile_text"><a 
                          style={{color: "blue"}}
                          className="SectionLink_without_deco"
                          href={MALIS_Report} 
                          target="_blank"><u>Click to see the Project Report</u></a></p>
                      <div className="zero_point_five_cm_vertical_space"/>
                  </div>
                  </div>
                </div>
                <div>
                    <iframe 
                    className="MWD_ytb"
                    width="380" height="300"
                    src="https://youtube.fr/embed/N27kOUE0Qw8" // don't forget to put "embed/"
                    frameborder="0"
                    allowFullScreen>
                    </iframe>
                </div>
                </div>
                <div className="one_cm_vertical_space"/>
                <div className="row">
                <div>
                  <div className="row">
                  <div>
                      <h3 
                      className="title"
                      style={{textAlign: 'center'}}>
                          <a 
                              className="SectionLink_without_deco"
                              id="gotoMWD" href="#gotoTopMWD">B. Covid-19 Statistic WebSite</a>
                      </h3>
                      <div className="zero_point_eight_cm_vertical_space"/>
                      <h4 style={{textAlign: "center"}}>Website developed with Angular to see statistis about covid-19.</h4>
                      <div>
                        <iframe 
                          className="angular_mobile_ytb"
                          src="https://youtube.fr/embed/n7-BTFQZUpQ"
                          frameborder="0"
                          allowFullScreen>
                        </iframe>
                      </div>
                      <div className="zero_point_eight_cm_vertical_space"/>
                      <u className="fifteen_px_mobile_text">Use of several Google Cloud Platform features such as</u>:
                      <div className="zero_point_two_cm_vertical_space"/>
                      <div style={{marginLeft:50}}
                      className="zero_point_two_cm_vertical_space">
                      <li className="fifteen_px_mobile_text"><b>Hosting</b>: to host the application online</li>
                      <li className="fifteen_px_mobile_text"><b>Storage</b>: to store images </li>
                      <li className="fifteen_px_mobile_text"><b>Firestore</b>: to store data on a NoSQL database</li>
                      <li className="fifteen_px_mobile_text"><b>Authentication</b>: to allow a user to sign in and enter data</li>
                      </div>
                      <div className="zero_point_five_cm_vertical_space"/>
                      <u className="fifteen_px_mobile_text">For the design, use of</u>:
                      <div className="zero_point_two_cm_vertical_space"/>
                      <div style={{marginLeft:50}}
                      className="zero_point_two_cm_vertical_space">
                      <li className="fifteen_px_mobile_text"><b>Bootstrap</b>.</li>
                      <li className="fifteen_px_mobile_text"><b>jQuery</b>.</li>
                      <li className="fifteen_px_mobile_text"><b>Chart.js</b>.</li>
                      <li className="fifteen_px_mobile_text"><b>Font Awesome</b>.</li>
                      </div>
                      <div className="zero_point_five_cm_vertical_space"/>
                  </div>
                  </div>
                </div>
                <div>
                    <iframe 
                    className="angular_ytb"
                    src="https://youtube.fr/embed/n7-BTFQZUpQ"
                    frameborder="0"
                    allowFullScreen>
                    </iframe>
                </div>
                </div>
        <div>
        <div className="one_cm_vertical_space"/>
        <h3 className="title">
            <a className="SectionLink_without_deco" id="gotoTSP" href="#gotoTopTSP">II. TSP</a></h3>
        <div className="zero_point_two_cm_vertical_space"/>
       </div>
       <div className="row">
          <div> 
          <a  href="https://www.telecom-sudparis.eu/" target="_blank">
            <img 
            className="TSP_logo" 
            src={process.env.PUBLIC_URL +'/Logo/Logo_TSP.jpg'}
            alt="TSP_logo"/></a> 
          </div>
          <div style={{marginTop:20, marginRight: 20, marginLeft: 20}}>
            <h3 style={{textAlign: "center"}}><a  
            className="SectionLink_without_deco"
            href="https://gitlabens.imtbs-tsp.eu/dzenan.cindrak/pro3600_17-gestiondestocks"
            target="_blank">Link to GitLab for my TSP Projects</a></h3>
          </div>
          <div> {/* _blank to open in an other tab (onglet) */}
                        <img 
            className="Gitlab_logo" 
            src={process.env.PUBLIC_URL +'/Logo/GitLab_logo.png'}
            alt="Gitlab_logo"/>
          </div>
        </div>
        <div className="one_cm_vertical_space"/>
                <div className="row">
                <div className="zero_point_eight_cm_vertical_space"/>
                <div>
                  <div className="row">
                  <div>
                  <div className="zero_point_five_cm_vertical_space"/>
                  <img 
                  className="Stock_logo"
                  src={process.env.PUBLIC_URL +'/Logo/Stock_logo.png'} 
                  width="90" height="90" 
                  alt="Stock_logo"
                  />
                  </div>
                  <div>
                      <h3 
                      className="title"
                      style={{textAlign: 'center'}}>
                          <a
                            className="SectionLink_without_deco"
                            id="gotoStocks" href="#gotoTopStocks">A. Android application - Inventory management - Stocks</a>
                      </h3>
                      <div className="zero_point_eight_cm_vertical_space"/>
                      <p style={{textAlign: "center"}} className="fifteen_px_mobile_text">
                        <h4 style={{textAlign: "justify", marginRight: "5px"}}>Application developed by a group of 4 people (including me) on Android Studio with the Kotlin 
                        language in order to realize a real computer software development (project over 6 months, more 
                        than 60 hours of work for each one, with as tutor Mr Belaïd, head of TSP's IT department during 
                        this period).</h4></p>
                      <div className="zero_point_five_cm_vertical_space"/>
                      <div className="what_I_made_section">
                      <u className="fifteen_px_mobile_text">What I made</u>:
                      <div className="zero_point_two_cm_vertical_space"/>
                      <li className="zero_point_two_cm_vertical_space">
                        Some classes for the type of the stored objects (Projector for instance). </li>
                      <li className="zero_point_two_cm_vertical_space">The design of the application elements (interface, button, popup display, ...). </li>
                      <li className="zero_point_two_cm_vertical_space">
                        Management of meeting minutes (facilitator), schedules , report writing (State of the art, 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;functional analysis and description of the Database).</li>
                      <div className="zero_point_five_cm_vertical_space"/>
                      <p><a 
                          style={{color: "blue"}}
                          className="SectionLink_without_deco"
                          href={PRO3600_Rapport} 
                          target="_blank"><u>Click to see the Development Project Report (in French)</u></a></p>
                      </div>
                      <div className="zero_point_five_cm_vertical_space"/>
                  </div>
                  </div>
                  <div>
                          <iframe 
                          className="Stock_mobile_ytb"
                          src="https://youtube.fr/embed/g7plgRIbLnk" // don't forget to put "embed/"
                          frameborder="0"
                          allowFullScreen>
                          </iframe>
                      </div>
                  <div className="what_I_made_section_mobile">
                      <u className="fifteen_px_mobile_text"><i>What I made</i></u>:
                      <div className="zero_point_two_cm_vertical_space"/>
                      <li className="fifteen_px_mobile_text">
                        Some classes for the type of the stored objects (Projector for instance). </li>
                      <div className="zero_point_two_cm_vertical_space"/>
                      <li className="fifteen_px_mobile_text">The design of the application elements (interface, button, popup display, ...). </li>
                      <div className="zero_point_two_cm_vertical_space"/>
                      <li className="fifteen_px_mobile_text">
                        Management of meeting minutes (facilitator), schedules , report writing (State of the art,
                        functional analysis and description of the Database).</li>
                      <div className="zero_point_five_cm_vertical_space"/>
                      <p className="fifteen_px_mobile_text"><a 
                          style={{color: "blue"}}
                          className="SectionLink_without_deco"
                          href={PRO3600_Rapport} 
                          target="_blank"><u>Click to see the Development Project Report (in French)</u></a></p>
                      </div>
                </div>
                <div>
                    <iframe 
                    className="Stock_ytb"
                    width="380" height="300"
                    src="https://youtube.fr/embed/g7plgRIbLnk" // don't forget to put "embed/"
                    frameborder="0"
                    allowFullScreen>
                    </iframe>
                </div>
                </div>
      <div className="one_cm_vertical_space"/>     
    </body>
    )
}