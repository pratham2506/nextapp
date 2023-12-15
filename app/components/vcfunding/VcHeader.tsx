import React from "react";
import "./VcHeader.css";
import VcHead from './fundingImg.png'
import VcLeft from './fundingLeft.png'

const VcHeader = () => {
  return (
    <div className="vc-page">
      {/* <div className="vc-head">
        <div className="vc-content">
          <h1>Driving Diversity, Equity and Inclusion in Venture Capital</h1>
        </div>
        <div className="vc-overlay"></div>

        <div className="vc-wave">
        <svg xmlns="http://www.w3.org/2000/svg" width="375" height="50" viewBox="0 0 375 50" preserveAspectRatio="none" aria-hidden="true">
                <path fill-rule="evenodd" d="M0,550 L375,550 L375,500 C312.5,516.666667 250,525 187.5,525 C125,525 62.5,516.666667 0,500 L0,550 Z" transform="translate(0 -500)" ></path>
            </svg>
        </div>
      </div> */}


      <div className="vcHeader">

          <img src='https://droneairgear.com/assets/fundingImg-4425ed28.png' className="vcHeaderImg"/>
          <img src='https://droneairgear.com/assets/fundingLeft-38aa15d9.png' className="vcHeaderLeft"/>

        <div className="vcText">
          <h1>Welcome to Drone Air Gear! Empowering Innovators, Fueling Growth.</h1>
          <p>Are you a visionary entrepreneur with a groundbreaking idea? Or perhaps an early-stage startup looking to take your business to new heights? Look no further!</p>
        </div>

        <div className="vcBlank"></div>

      </div>






{/* --------------------------------------------------------------------------------Header Over---------------------------------------------- */}

      <div className="vc-text">
        <h4>Fueling the Future</h4>
        <h1>Our Venture Capital Strategy for Innovation</h1>
        <p>
        Customized Solutions for Inclusive Excellence: Equipping You with Best Practices and Expert Guidance for Your DEI Strategy. We work with:
        </p>
      </div>

      <div className="vc-globes">
        <div className="vc-box">
          <img
            src="https://diversity.vc/wp-content/uploads/2022/01/third.png"
            alt=""
          />
          <p>Venture Capital funds to assess and improve their DEI metrics</p>
        </div>
        <div className="vc-box">
          <img
            src="https://diversity.vc/wp-content/uploads/2022/01/first.png"
            alt=""
          />
          <p>Underrepresented candidates breaking into the industry</p>
        </div>
        <div className="vc-box">
          <img
            src="https://diversity.vc/wp-content/uploads/2022/01/second.png"
            alt=""
          />
          <p>
            Organizations looking to better understand the state of DEI across
            the ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default VcHeader;