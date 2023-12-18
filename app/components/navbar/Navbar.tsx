// Navbar.js
"use client"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="drawer-toggle" onClick={toggleDrawer}>
        <FaBars />
      </div>
      <nav className={`abcnav ${isDrawerOpen ? 'open' : ''}`}>
        <div className="logo">
          <Link href='/'>
            <img src="https://droneairgear.com/assets/Droneair-29de872f.png" alt="" />
          </Link>
        </div>
        <ul>
          <Link href="/components/courses" className='listt'>
            Courses
          </Link>
          <Link href="/components/industry" className='listt'>
            Industry
          </Link>
          <Link href="/components/internship" className='listt'>
            Internship
          </Link>
          <Link href="/components/mentor" className='listt'>
            Mentor
          </Link>
          <Link href="/components/university" className='listt'>
            University
          </Link>
          <Link href="/components/drone" className='listt'>
            Drone
          </Link>
          <Link href="/components/vcfunding" className='listt'>
            VC Funding
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
