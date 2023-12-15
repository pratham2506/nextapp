"use client"
import React from "react";
import "./VideoCon.css";
import C from "../../assets/c-girl.png";
import url1 from '../../assets/Home/video_thumb1.png';
import url2 from '../../assets/Home/video_thumb2.png';
import Link from "next/link";



const VideoCon = () => { 
  return (
    <div className="videoCon">
      {/* <div className="videoLeft">
          <span>Come find Us</span>
          <h1>We Need Your Help,Join Us!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            doloribus aspernatur, dicta non doloremque iure unde, officia
            perferendis quibusdam, perspiciatis molestiae dolor! Voluptatem   
            consequatur eligendi odio veniam, minus sapiente debitis.
          </p>
        </div>
      <div className="videoRight">
        <div className="videoLay">
          <img
            src="https://images.unsplash.com/photo-1580287925446-7ed8ce2709c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
          <img
            src="https://c0.wallpaperflare.com/preview/673/828/966/drone-reverb-racing-quadcopter.jpg"
            alt=""
          />
        </div>
        <div className="videoLay">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/539/37/134/drone-dji-mavic-dji-mavic-2-pro-hd-wallpaper-preview.jpg"
            alt=""
          />
          <img
            src="https://w0.peakpx.com/wallpaper/468/259/HD-wallpaper-nature-landscape-portrait-display-road-highway-aerial-view-drone-forest-trees-car-fall-wildlife-crossings.jpg"
            alt=""
          />
        </div>
      </div> */}

      <div className="videoTop">
        <div className="videoLeft">
          <video src='https://droneairgear.com/assets/onevid-3a8e1db1.mp4' autoPlay loop muted></video>
        </div>

        <div className="videoRight">
          

          <div className="videoInfo">
            <h4>Research & Development</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus et asperiores libero, eveniet debitis totam quo nam im
            </p>
            <Link href="/researchDev" className="videoSpan">
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <div className="videoBottom">

        <a href="https://youtu.be/YSPu1hrs8-8" className="videoimg">
          <img
            src='https://droneairgear.com/assets/video_thumb1-00176c06.png'
            alt=""
            style={{objectPosition:"top"}}
          />
        </a>

        <a href="https://youtu.be/Kq8kfkRq5Kg" className="videoimg videoimg">
          <img
            src='https://droneairgear.com/assets/video_thumb2-660e6308.png'
            alt=""
            style={{objectPosition:"top"}}

          />
        </a>

        <a href="" className="videoimg videoimg">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/539/37/134/drone-dji-mavic-dji-mavic-2-pro-hd-wallpaper-preview.jpg"
            alt=""
          />
        </a>

        <a href="" className="videoimg videoimg">
          <img
            src="https://w0.peakpx.com/wallpaper/468/259/HD-wallpaper-nature-landscape-portrait-display-road-highway-aerial-view-drone-forest-trees-car-fall-wildlife-crossings.jpg"
            alt=""
          />
        </a>

      </div>
    </div>
  );
};

export default VideoCon;