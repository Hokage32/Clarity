import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="landing-box">
        <div className="animation">
        <Spline className="spline" scene="https://prod.spline.design/NBNNZWPGBQgK7TB3/scene.splinecode"/>

         <Link to={'/home'}>
         <button>Enter Clarity</button>
         </Link>
         </div>
        <div className="landing-message">
          <h1>Welcome to Clarity</h1>

          <h2>
            Your Sanctuary for Clear Thinking. The app to declutter your mind,
            guiding you towards serene thoughts and mental tranquility.
            Rediscover peace in a chaotic world with Clarity, your trusted
            companion for a focused and calm mind.
          </h2>

         
        </div>
        
      </div>
      <div className="landing-about-box">
        <div className="landing-about">
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="landing-about">
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="landing-about">
          <h2>Lorem Ipsum</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
