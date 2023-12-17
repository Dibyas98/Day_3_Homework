import React from "react";
import adver1 from "./Assects/adver1.jpg";
import "./hero.css";

function Hero(props) {
  return (
    <main className= {`desc-${props.mode}`}>
      <img src={adver1} alt="ph1" />
      <div className="content">
        <h1>Think Health. Think Message.</h1>
        <p>
          We are open 9am to 6pm; Mondaythrough Sunday. If you would like to
          scheduled an appointment with us, please call us at 987-543 120 oday!
        </p>
        <div className="btn">
          <button>Learn more about us</button>
          <button>Contact us today</button>
        </div>
      </div>
      <div className={`desc `}>
        <p>Are you looking for a professional, registered massage therepist? Sample Message Therapy has 4 registered message therepist  who can provide clinical massage.</p>
        <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle.Enhance your hesith and improve your performance with our treatments.</p>
        <p>We welcome you to come explore all the benefitz you'll em We welcome you to come explore all the benefits you'll enjoy es one of our velued guests. Our profezzional staff is committed to offering the ved quezte. Our protezzion staff is committed to offering the best mazsage therapy in Mainland</p>
      </div>
      <div className="hr"></div>
      <div className="detail">
        <h1>Family Wellness Massage Therapy</h1>
        <address>970 Main Street. Suite 123, Mainland, Ml12549</address>
      </div>
    </main>
  );
}
export default Hero;
