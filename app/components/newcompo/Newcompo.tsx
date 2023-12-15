"use client"
import React, { useEffect } from 'react'
import './Newcompo.css';
import scientist from './scientist.png'
import experience from './experience.png'
import freelance from './freelance.png'
import industries from './industries.png'
import prototype from './prototype.png'
import research from './research.png'
import running from './running.png'



const Newcompo = () => {

      
         
  return (
    <div>
        <div className="nc-masterdiv">
            <div className="nc-imgdiv" data-aos="flip-right" data-aos-delay="100" >
                
            </div>

            <div className="nc-textdiv" data-aos="flip-left" data-aos-delay="400" >
                <p>Progression and Adaptation</p>
                <h1>Building Future Professionals</h1>
                <div className="nc-boxydiv extradiv">
                    <div className="nc-boxyimg">
                        <img src='https://droneairgear.com/assets/experience-55581263.png' alt="" />
                    </div>
                    <div className="nc-boxytext">
                        <h1>Practical Work Experience</h1>
                        <p>Gain hands-on skills through industry projects, enhancing employability and professional growth..</p>
                    </div>
                </div>
                <div className="nc-boxydiv">
                    <div className="nc-boxyimg">
                    <img src="https://droneairgear.com/assets/freelance-c47dae75.png" alt="" />
                    </div>
                    <div className="nc-boxytext">
                        <h1>Skill Development Programs</h1>
                        <p>Enhance expertise with specialized training programs for industry-relevant skills and knowledge.</p>
                    </div>
                </div>
                <div className="nc-boxydiv">
                    <div className="nc-boxyimg">
                    <img src='https://droneairgear.com/assets/industries-d1eb34bd.png' alt="" />
                    </div>
                    <div className="nc-boxytext">
                        <h1>Industry-Specific Internships</h1>
                        <p>Explore internships tailored to specific industries, providing practical exposure and industry-specific skills.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="nc-masterdiv">
            
 
            <div className="nc-textdiv" data-aos="flip-left" data-aos-delay="100" >
                <p>Transformative Education</p>
                <h1>Train Students for Future Challenges</h1>
                <div className="nc-boxydiv extradiv">
                    <div className="nc-boxyimg">
                        <img src='https://droneairgear.com/assets/prototype-ca9d2efa.png' alt="" />
                    </div>
                    <div className="nc-boxytext">
                        <h1>Industry-Relevant Education</h1>
                        <p>By partnering with us, universities can ensure that their curriculum aligns with the needs and trends of industries.</p>
                    </div>
                </div>
                <div className="nc-boxydiv">
                    <div className="nc-boxyimg">
                    <img src='https://droneairgear.com/assets/research-bdea94bb.png' alt="" />
                    </div>
                    <div className="nc-boxytext">
                        <h1>Research and Innovation</h1>
                        <p>Universities can leverage internship data and insights to identify emerging trends & areas of industry growth. </p>
                    </div>
                </div>
                <div className="nc-boxydiv">
                    <div className="nc-boxyimg">
                    <img src='https://droneairgear.com/assets/running-cf758100.png' alt="" />
                    </div>
                    <div className="nc-boxytext">
                        <h1>Competitive Advantage</h1>
                        <p>Providing access to a comprehensive internship and learning platform can differentiate universities who prioritize practical experience.</p>
                    </div>
                </div>
            </div>
            <div className="nc-imgdiv nc-newimg" data-aos="flip-right" data-aos-delay="400" >
                
            </div>
        </div>
    </div>
  )
}

export default Newcompo