import './CV.css';
import GATE_Team from "./GATE_Team.jpg";
import React from 'react';
import poster_programme_jeunes from "./poster_programme_jeunes.png";
import affiche_programme_jeunes from "./affiche_programme_jeunes.png";


export default function GATE_AFM() {
    return (
        <>
        <div>
            <div className="one_cm_vertical_space"/>
                <div className="row">
                        <div>
                        <div>
                            <img className="team_gate_img_mobile" src={GATE_Team} alt="GATE Team" />
                            </div>
                        <div className="zero_point_three_cm_vertical_space"/>
                            <p className="fifteen_px_mobile_text">
                            <u>Aim of the mission</u>: Mobilize young patients: AFM Telethon wanted to enable its young people 
                            to take action and participate in the leadership of the association created and governed 
                            initially by and for patients and their families.
                            </p>
                            <div className="zero_point_two_cm_vertical_space"/>
                            <p className="fifteen_px_mobile_text">
                            We were 9 students from Télécom SudParis who wished to join this mobilization through 2 main 
                            objectives:
                            <ul className="gate_afm_lis_ul">
                                <li className="fifteen_px_mobile_text">
                                <div className="zero_point_two_cm_vertical_space"/>
                                To help young patients to carry out their integrated projects within the AFM's youth 
                                project incubator (15-25 years old) by sharing their recent skills in project management 
                                (feasibility, financing, communication...)
                                </li>
                                <div className="zero_point_two_cm_vertical_space"/>
                                <li className="fifteen_px_mobile_text">
                                Co-organize the large annual national meeting planned for spring 2020 by proposing 
                                workshops and/or conferences chosen by patients and their families and by promoting the 
                                incubator of young AFM projects. Cancelled due to covid-19 health crisis.
                                </li>
                            </ul>
                            </p>
                            <div className="zero_point_five_cm_vertical_space"/>
                            <p className="fifteen_px_mobile_text">
                            <u>Result</u>: Created in the spring of 2020, the AFM-Telethon's Youth group aims to fight against 
                            stereotypes linked to the disease, but also to encourage commitment and the sharing of 
                            experiences. To learn more, follow the Youth group on <a className="SectionLink" href="https://www.facebook.com/JeunesAFMTelethon/">
                            Facebook</a> or on <a className="SectionLink" href="https://www.instagram.com/afmtelethonjeunes/">Instagram</a>.
                            </p>
                            <div className="zero_point_two_cm_vertical_space"/>
                        </div>
                        <div>
                            <img className="team_gate_img" src={GATE_Team} alt="GATE Team" />
                            </div>
                </div>
                <div className="zero_point_five_cm_vertical_space"/>
                <div className="poster_affiche_div">
                    <img 
                    style={{marginRight: 80}}
                    className="poster_programme_jeunes" 
                    src={poster_programme_jeunes} 
                    alt="poster_programme_jeunes" />
                    <img 
                    className="affiche_programme_jeunes" 
                    src={affiche_programme_jeunes} 
                    alt="affiche_programme_jeunes"
                     />
                </div>

                <div className="poster_affiche_mobile_div">
                    <img 
                    className="poster_programme_jeunes" 
                    src={poster_programme_jeunes} 
                    alt="poster_programme_jeunes" />
                </div>

                <div className="poster_affiche_mobile_div">
                    <img 
                    className="affiche_programme_jeunes" 
                    src={affiche_programme_jeunes} 
                    alt="affiche_programme_jeunes"
                     />
                </div>
                <div className="one_cm_vertical_space"/>
                <div className="row">
                <div>
                    <div className="zero_point_five_cm_vertical_space"/>
                    <h3 style={{textAlign: 'center'}}>Pitching Festival - TSP - 09/11/2019</h3>
                    <div className="zero_point_eight_cm_vertical_space"/>
                    <div>
                    <iframe 
                    className="pitch_gate_mobile"
                    src="https://youtube.fr/embed/Zk5pONJGemU" // don't forget to put "embed/"
                    frameborder="0"
                    allowFullScreen>
                    </iframe>
                </div>
                    <li className="fifteen_px_mobile_text">Pitch made in French.</li>
                    <li className="fifteen_px_mobile_text">Animation directed by Vincent Rigaut, professional in communication techniques.</li>
                    <li className="fifteen_px_mobile_text">All evaluated by a jury of 4 people.</li>
                    <div className="zero_point_five_cm_vertical_space"/>
                    <p className="fifteen_px_mobile_text">
                    The exercise consists in making a 1-minute pitch on his project (on the AFM-Telethon 
                    in my case) without support (slides or notes), only with "the force of words".
                    </p>
                    <div className="zero_point_five_cm_vertical_space"/>
                    <p className="fifteen_px_mobile_text">
                        We were 24 people representing their team. 
                        In the end, I won the "Coup de coeur du Jury" ("<b><i>Jury's Favourite</i></b>") prize.
                    </p>
                </div>
                <div>
                    <iframe 
                    className="pitch_gate"
                    width="380" height="250"
                    src="https://youtube.fr/embed/Zk5pONJGemU" // don't forget to put "embed/"
                    frameborder="0"
                    allowFullScreen>
                    </iframe>
                </div>
                </div>
            </div>
        </>
    )
}
