import React, { useEffect } from 'react'
import './Industry.css'
import dronde from '../../assets/droned.png'
import megaphone from '../../assets//megaphone.png'
import graph from '../../assets//graph.png'
import pencil from '../../assets//pencil.png'
import recruitment from '../../assets//recruitment.png'
import review from '../../assets//review.png'
import analytics from '../../assets//analytics.png'
import dollar from '../../assets/dollar.png'

import tab from './HH.png'
import mobile from './DF.png'
import laptop from './11.png'

import Link from 'next/link'
const Industry = () => {
    
  return (
    <div id="industry">
    <div className="industy_bg">
        <div className="industry_landing">
            <div className="landing_text_area" data-aos="fade-right" data-aos-delay="100" >
                <h1>Join us in creating innovative solutions, Experiance and Employmeant </h1>
                <p>Exploring New Possibilities and Collaborating for Innovation and Success</p>

                <div className="uni_btn">
                    <Link href='/industry_registration' className='uni_button'>Get Started</Link>
                </div>
            </div>
            <div className="industry_dummy">
                
            </div>
        </div>
        </div>

        <div className="ind_why_us">
            <div className="why_us_heading" data-aos="fade-up" data-aos-delay="100">
                <h1>Collaborative Support For internship and Funding</h1>
                <p>Post jobs and find your ideal candidate</p>
            </div>
            <div className="why_us_trade" data-aos="fade-up" data-aos-delay="400">
                <div className="trade">
                    <div className="why_us_content">
                        <div className="rating">
                            21
                        </div>
                        <div className="content">
                            Candidates Hired till Now
                        </div>
                    </div>
                    <div className="why_us_content">
                        <div className="rating">
                            3
                        </div>
                        <div className="content">
                        Companies Got Funding.
                        </div>
                    </div>
                    <div className="why_us_content">
                        <div className="rating">
                        200
                        </div>
                        <div className="content">
                        Applications of the candidates
                        </div>
                    </div>
                    <div className="why_us_content border_none">
                        <div className="rating">
                        5
                        </div>
                        <div className="content">
                        No. of companies Joined till now
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="ind_adv">
            <div className="ind_adv_max">
            <div className="ind_adv_heading" data-aos="fade-right" data-aos-delay="100">
                <h1>Ready for the collobration that's shaping your industry </h1>
                <p> Don't miss the opportunity, Get started today itself.</p>
            </div>
            <div className="ind_adv_info" data-aos="fade-right" data-aos-delay="400">
                <div className="adv_info">
                    <div className="adv_info_logo">
                        <img src='https://droneairgear.com/assets/megaphone-794d87f7.png' alt="" />
                    </div>
                    <div className="adv_info_sub_info">
                        <h1>Hire Candidates</h1>
                        <p>
                        Hire Completly trained and siklled workers from [company name] 
                        </p>
                    </div>
                </div>
                <div className="adv_info">
                    <div className="adv_info_logo">
                    <img src='https://droneairgear.com/assets/dollar-a8d77b9c.png' alt="" />
                    </div>
                    <div className="adv_info_sub_info">
                        <h1>Get Funding from us.</h1>
                        <p>
                        Funding for the innovation and progress is available.
                        </p>
                    </div>
                </div>
                <div className="adv_info">
                    <div className="adv_info_logo">
                        <img src='https://droneairgear.com/assets/graph-03dbc2b3.png' alt="" />
                    </div>
                    <div className="adv_info_sub_info">
                        <h1>Internship coduction</h1>
                        <p>
                        Internship Program can be organised and manage offline as well as online.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>


        <div className="ind_emp_branding">
            <div className="ind_emp_max">
            <div className="branding_heading" data-aos="fade-right" data-aos-delay="100" >
                <div className="sub_heading">Mainly focus on Drones</div>
                <div className="design"></div>
                <h1>Revolutionizing Industries with Advanced Drone Technology</h1>
                <p>Glassdoor’s employer branding solutions tell job seekers why they want to work at your company and help uncover ways to improve your employee experience.</p>
            </div>
            <div className="branding_img" data-aos="fade-left" data-aos-delay="400">
                <img src='https://droneairgear.com/assets/droned-60e6737f.png' alt="" />
            </div>
            </div>
        </div>

        <div className="ind_process_com">
        <div className="ind_process_max">
            <div className="ind_process">
                <div className="ind_pro_info"  data-aos="fade-up" data-aos-delay="100" >
                    <h1>Expand Your Skills</h1>
                    <p>Collaboration leads to several benefits for companies, including expansion. By collaborating with other companies, businesses can gain access to new markets, customers, and resources. </p>
                </div>

                <div className="industryImg">
        <div className="mentorInfoImg">
        <img src='https://droneairgear.com/assets/11-7845b857.png' className='lap' alt="" />
        <img src='tab' className='tab' alt="" />
        <img src='mobile' className='mob' alt="" />
    </div>
        </div>
{/*                 
                <div className="ind_pro_sub_info" data-aos="fade-right" data-aos-delay="400" >
                    <div className="pro_sub">
                        <div className="pro_logo">
                            <img src={pencil} alt="" />
                        </div>
                        <div className="pro_sub_info">
                            <h1>Access to New Ideas and Perspectives</h1>
                            <p>
                            Inviting other companies and professionals to collaborate can bring fresh ideas and perspectives to a project or industry.   </p>
                        </div>
                    </div>

                    <div className="pro_sub">
                        <div className="pro_logo">
                            <img src={recruitment} alt="" />
                        </div>
                        <div className="pro_sub_info">
                            <h1>Shared Resources</h1>
                            <p>
                            Collaboration can provide access to resources that may not be available to individual companies. This can include funding, and knowledge-sharing.                            </p>
                        </div>
                    </div>

                    

                    
                </div>

                <div className="ind_pro_sub_info" data-aos="fade-left" data-aos-delay="400">
                    

                    <div className="pro_sub">
                        <div className="pro_logo">
                            <img src={review} alt="" />
                        </div>
                        <div className="pro_sub_info">
                            <h1>Increased Efficiency</h1>
                            <p>
                            Collaboration can help streamline processes and increase efficiency in a project or industry. By dividing up tasks and responsibilities, companies can work more effectively and complete projects in a shorter amount of time.                            </p>
                        </div>
                    </div>

                    <div className="pro_sub">
                        <div className="pro_logo">
                            <img src={analytics} alt="" />
                        </div>
                        <div className="pro_sub_info">
                            <h1>Networking Opportunities</h1>
                            <p>
                            Collaborating with other companies and professionals provides networking opportunities that can be beneficial for future projects or business endeavors. It allows for the creation of new business relationships.                            </p>
                        </div>
                    </div>

                    
                </div> */}
            </div>
            </div>
        </div>


        {/* <div className="ind_banner">
            <div className="logo" data-aos="fade-left" data-aos-delay="300">
                ConflyDesigns
            </div>
            <div className="info" data-aos="fade-left" data-aos-delay="300">
            “Save time and effort by finding the nearest drone industries with just a few clicks. Start exploring now!”
            </div>
            <Link to="/industry_listdown" className="write_by" data-aos="fade-left" data-aos-delay="300">
            — Know More 
            </Link>
        </div> */}

<div className="uni_partner_bg">
        <div className="our_uni_partner">
            <div className="uni_partner_right">
                <h1>
                    Supercharge your success, unlock boundless opportunities for limitless growth.
                </h1>
            </div>
            <Link href="/industry_listdown" className="uni_partner_left">
            <ul>
                <li>
                    <img src="https://pigeonis.in/wp-content/uploads/2018/07/145x62.png" alt="Tecnológico de Monterrey" width="auto"/>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397209133/2cc321480e22d497732c91eb20944f75.jpg" alt="University of Michigan" width="auto" />
                </li>
                <li className='border_right'>
                    <img src="https://indrones.com/images/logos/indrones_black.png" alt="Imperial College London" width="auto" />
                </li>
                <li className='border_bottom'>
                    <img src="https://d33wubrfki0l68.cloudfront.net/252a32974232a48653083676b6976e205edca63c/1e9cc/img/eqd-logo_trasperncy.png" alt="The University of Melbourne" width="auto" />
                </li>
                <li className='border_bottom'>
                    <img src="https://www.axldrone.com/images/logo.svg" alt="Manipal University" width="auto" />
                </li>
                <li className='border_bottom border_right'>
                    <img src="https://rfly.in/wp-content/uploads/2022/08/RFLY-INNOVATIONS-LOGO-R-1-320x144.png" alt="NMIMS" width="auto" />
                </li>
                </ul>
            </Link>
            
        </div>
        </div>
        
    </div>
  )
}

export default Industry