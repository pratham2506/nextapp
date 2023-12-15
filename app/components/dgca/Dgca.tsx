"use client"
import React from 'react'
import './Dgca.css'
import url1 from './1.png'

const Dgca = () => {
  return (
    <div>
        <div className="dgca-maindiv">
            <div className="dgca-onediv">
                <h2>DGCA</h2>
                <h1>Explore the World of Drone</h1>
                <p >Immerse into movies, live TV content, apps, and games.</p>
                <a href='https://www.dgca.gov.in/digigov-portal/' target='_blank' className='btn' >Know More</a>
            </div>

            <div className="dgca-twodiv">
                <img src='https://droneairgear.com/assets/1-217db3a8.png' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Dgca