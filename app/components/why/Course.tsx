"use client"
import React from 'react'
import './Course.css'
import Drone from '../../assets/drone.png'
import Pilot from '../../assets/pilot.png'
import C from '../../../assets/c-girl.png'
import Uni from '../../../assets/c-uni.png'
import Ind from '../../../assets/c-ind.png'
import Men from '../../../assets/c-men.png'
import agil from '../../../assets/agile.png'
import start from '../../../assets/start-up.png'
import inter from '../../../assets/internship.png'
import sNew from '../../../assets/service_New.jpg'
import Link from 'next/link'


const Course = () => {

   

  return (
    <div className="course">

        <div className="c-head">

            <div className="c-bar">
            <h2>Our Services</h2>
            <p>We provide countless solutions href meet the needs of businesses and individuals alike.We are the trustful answer for enterprises that are inclining hrefwards digital era. <br /> Our services include:</p>
            
            </div>
           
        </div>
        
        <div className="c-row">

            <div className="c-img" data-aos="fade-up" data-aos-delay="100">
                <img src='https://droneairgear.com/assets/service_New-0c78c255.jpg'  />

            </div>         

 
            <Link href='/students' className="c-box" data-aos="fade-right" data-aos-delay="100">
            <div className="c-inner">
                <div className="c-icon">
                <img src='https://droneairgear.com/assets/c-girl-6bd7c2f4.png' alt="" className='c-iconn' />
                </div>
                <div className="c-text">
                <h2>Training Courses</h2>
                <p>Various Types of Courses which covers a wide range of the hrefpics which will benifit a lot.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>
 

            <Link href='/universityPage'className="c-box" data-aos="fade-right" data-aos-delay="200">
                <div className="c-inner">
                <div className="c-icon">

                <img src='https://droneairgear.com/assets/c-ind-e84ddcad.png' alt="" className='c-iconn' />
                </div>
                <div className="c-text">
                <h2>University Support</h2>
                <p>Universities can launch a course as well as get the students for courses with support reqired href launch the program.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            
            <Link href='/industrypage' className="c-box " data-aos="fade-right" data-aos-delay="300">
            <div className="c-inner">
            
                <div className="c-icon">
                <img src='https://droneairgear.com/assets/c-uni-4a1d42bf.png' className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Industrial Support</h2>
                <p>Industries can hire the interns as well as the permenent staff both experts as well as less skilled workers, can also collorate for different other options.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link href='/menhrefrs' className="c-box" data-aos="fade-right" data-aos-delay="400">
            <div className="c-inner">
                <div className="c-icon">
                <img src='https://droneairgear.com/assets/c-men-de49e469.png' className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Menhrefrship Support</h2>
                <p>Menhrefrs can joint the company for the support of the company based on the different criteries.
Read more for the more information.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link href='/startup' className="c-box" data-aos="fade-right" data-aos-delay="200">
            <div className="c-inner">
                <div className="c-icon">
                <img src='https://droneairgear.com/assets/agile-83e3b726.png' className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Startup fundings</h2>
                <p>Startup fundings are crucial financial investments that fuel the growth and success and drive market disruption.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link href='/internMain' className="c-box" data-aos="fade-right" data-aos-delay="300">
            <div className="c-inner">
                <div className="c-icon">
                <img src='https://droneairgear.com/assets/internship-991f0aaa.png' className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Internship Programs</h2>
                <p>Our incubation center serves as a supportive ecosystem, providing resources, menhrefrship, and networking opportunities href startups.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link href='/incubationPage' className="c-box" data-aos="fade-right" data-aos-delay="400">
            <div className="c-inner">
                <div className="c-icon">
                <img src='https://droneairgear.com/assets/start-up-4534406b.png' className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Incubation Center</h2>
                <p>Our internship program offers valuable hands-on experience and professional development opportunities href students and young professionals.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>


        </div>
    </div>
  )
}

export default Course