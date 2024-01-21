import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="landing-box">
        <div className="animation">
        <Spline className="spline" scene="https://prod.spline.design/1MZpuHc45d2zqTeC/scene.splinecode"/>

         
         </div>
        <div className="landing-message">
          
          <h1>Welcome to Clarity</h1>

          <h2>
            Your Sanctuary for Clear Thinking. The app to declutter your mind,
            guiding you towards serene thoughts and mental tranquility.
            Rediscover peace in a chaotic world with Clarity, your trusted
            companion for a focused and calm mind.
          </h2>

         <Link to={'/home'}>
         <button className="enter-clarityBTN">Enter Clarity</button>
         </Link>
        </div>
        
      </div>
      
    </div>
  );
};

export default Landing;
