import './CV.css';
import img_fdtGB_MmeBesse from './photo_with_Mme_Besse.jpg';
import React from 'react';
import img_MrBesse from './Georges_Besse.png';

export default function FGB () {
        return (
            <>
            <div>
                <div className='row'>
                    <div>
                    <div>
                        <img 
                        className="mme_fgb_mobile" 
                        src={img_fdtGB_MmeBesse} 
                        width="300" height="300" 
                        alt="Georges Besse fondation" />
                    </div>
                    <div className="one_cm_vertical_space"/>
                    <div className='row'>
                        <div><a 
                             href="https://en.wikipedia.org/wiki/Georges_Besse"
                            target="_blank">
                            <img 
                            className="M_Besse" 
                            src={img_MrBesse} 
                            alt="Mr Besse" /></a>
                        </div>
                        <div className="column_left_mbesse">
                            <div className="p_m_besse"/>
                            <p className="fifteen_px_mobile_text"><i>
                                "More than the individual success of a man, the life of Georges Besse is an exemplary 
                                journey that blends in with the great French industrial choices of the post-war period."
                            </i></p>
                            <div className="p_m_besse"/>
                            <p className="fifteen_px_mobile_text"><i>
                                "The name of this great servant of the Nation, both a pioneer of nuclear power at the national 
                                level and a great industrial leader, will remain inseparable from the history of the modernization of France."
                            </i></p>
                        </div>
                        </div>
                        <div className="zero_point_eight_cm_vertical_space"/>
                        <div className='row'>
                        <p className="fifteen_px_mobile_text">
                        I joined the Georges Besse Foundation in 2019 after a selection and an interview. 
                        This foundation helps very good engineering school students in serious financial difficulty to 
                        continue their studies.
                        Thus, I can serenely pursue my engineering studies thanks to them.</p>
                        </div>
                    </div>
                    <div>
                        <img 
                        className="mme_fgb" 
                        src={img_fdtGB_MmeBesse} 
                        width="300" height="300" 
                        alt="Georges Besse fondation" />
                    </div>
                </div>
            </div>
            </>
        )
    }
