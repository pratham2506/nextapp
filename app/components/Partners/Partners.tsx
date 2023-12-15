import React from "react";
import "./Partners.css";
import sponsor1 from "./sponser1.png";
import sponsor2 from "./sponser2.png";
import logo1 from "../../assets/ouralliance/1.png";
import logo2 from "../../assets/ouralliance/2.png";
import logo3 from "../../assets/ouralliance/3.png";
import logo4 from "../../assets/ouralliance/4.png";
import logo5 from "../../assets/ouralliance/5.png";
import logo6 from "../../assets/ouralliance/6.png";
import logo7 from "../../assets/ouralliance/7.png";


const Partners = () => {
 

  return (
    <div className="Partners">
      {/* <div className="p-sponsers p-sp1"  data-aos="fade-right" data-aos-delay="100" >
        <h1><span>Our</span> Alliance </h1>

        <div className="p-row">

          <a className="p-box log4">
          <img src={logo4} alt="" />
          </a>

          <a className="p-box log5">
          <img src={logo5} alt="" />
          </a>

          <a className="p-box log6">
          <img src={logo6} alt="" />
          </a>

          <a className="p-box log6">
          <img src={logo7} alt="" />
          </a>


        </div>


        <div className="p1-row ">

          <a className="p-box1 log1">
          <img src={logo1} alt="" />
          </a>

          <a className="p-box1 log2">
          <img src={logo2} alt="" />
          </a>

          <a className="p-box1 log3">
          <img src={logo3} alt="" />

          </a>


      </div>
      </div> */}

      <div className="pt-imgs">

        <img src='https://droneairgear.com/assets/sponser1-31b02c4a.png' className="pt-seen" />
        <img src='https://droneairgear.com/assets/sponser2-8a23ca7e.png' className="pt-unseen" />

      </div>
    </div>
  );
};

export default Partners;