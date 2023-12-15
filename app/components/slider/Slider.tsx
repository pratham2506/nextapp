"use client"
import React from 'react'
import './slider.css'
import Link from 'next/link';




const Slider = () => {
    return (
      <div className ='bg_for_invest'>
      <div className="in_top_shadow1"></div>
      {/* <div className="in_top_shadow2"></div> */}
      <div className="vc-overlay"></div>
       <div className="start_content">
           <h1>Play the game.<br/>Leave the rest to us.</h1>
           <p>Stories from nonprofits, tips for successful online fundraising, and inspiration from the team at Company name</p>
           <Link className='backwhite' href="">Join Us</Link>
       </div>
       <div className="str_mobile">
           <svg xmlns="http://www.w3.org/2000/svg" width="375" height="50" viewBox="0 0 375 50" preserveAspectRatio="none" aria-hidden="true">
               <path fill-rule="evenodd" d="M0,550 L375,550 L375,500 C312.5,516.666667 250,525 187.5,525 C125,525 62.5,516.666667 0,500 L0,550 Z" transform="translate(0 -500)" className="shape-fill"></path>
           </svg>
       </div>
   </div>
      );
    };

export default Slider
