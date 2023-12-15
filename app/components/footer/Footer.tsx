import React from 'react'
import './Footer.css'





const Footer = () => {

    

    



  return (



    <div className='Footer'>

        <div className="sub-links">
            {/* <div className="row"> */}
                <div className="con ">
                <h1>About</h1>
                <p>We are creating a ecosystem to foster collaboration, innovation, and industry-academia partnerships in the drone industry. </p>
                </div>
                <div className="con">
                <h1>Contact</h1>
                {/* <p><a className='link' ><Link to='/rulee'>Rules</Link></a></p> */}
                <p><a className='link'>Contact Us</a></p>
                {/* <p><a className='link' href='/'><Link to='/form'>Form</Link></a></p> */}
                <p><a className='link' href='/'>Mentor Filter</a></p>
                </div>
                <div className="con">
                <h1>Other Links</h1>
                <p><a className='link' >Incubation</a></p>
                <p><a className='link' >R&D</a></p>
                <p><a className='link' >Insuarance</a></p>


                </div>

            {/* </div> */}
            <div className="con ">
                <h1>Subscribe</h1>
                <p><a className='link' >Admin DB</a></p>
                {/* <p><a className='link' ><Link to='/indProfolio'>Mentor DB</Link></a></p>
                <p><a className='link' ><Link to='/menBoard'>Industry DB</Link></a></p>
                <p><a className='link' ><Link to='/indProfolio'>Student DB</Link></a></p> */}
            </div>
        </div>
        
        <div className="links">
        {/* <div class="logo">
            <img src={logoImg} alt="" />
          </div> */}
            <div className="main-links">
                <a className='link' href='/'>Home</a>
                <a className='link' href='/internMain'>Internship</a>
                <a className='link' href='/students'>Courses</a>
                <a className='link' href='/drone'>Drone</a>
            </div>
            <div className="social-icons">
            <a className='link' href='/'><i className="fa-brands fa-whatsapp"></i></a>
            <a className='link' href='/'><i className="fa-brands fa-instagram"></i></a>
            <a className='link' href='/'><i className="fa-brands fa-facebook"></i></a>
            <a className='link' href='/'><i className="fa-brands fa-youtube"></i></a>    

            </div>
        </div>
        
        <div className="reserved">
            <p>© Droneairgear All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer