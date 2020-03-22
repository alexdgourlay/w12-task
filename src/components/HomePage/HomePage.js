import React from "react";
import "./HomePage.css";

import strangerThingsHero from "../../assets/images/stranger-things-hero.png";
import blackSummer from "../../assets/images/black-summer-regular.png";
import blackMirror from "../../assets/images/black-mirror-regular.png";
import theMist from "../../assets/images/the-mist-regular.png";

const HomePage = (props) => {
  return (
    <div className="home-page">
      <div className="hero-card" onClick={() => props.transition()}>
        <img className="hero-image" alt="listing" src={strangerThingsHero}></img>
      </div>
      <p className="card-rail-title">More like this</p>
      <div className="card-rail">
        <div className="regular-card">
          <img alt="listing" src={blackSummer}></img>
        </div>
        <div className="regular-card">
          <img alt="listing" src={blackMirror}></img>
        </div>
        <div className="regular-card">
          <img alt="listing" src={theMist}></img>
        </div>
        <div className="regular-card">
          <img alt="listing" src={blackSummer}></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
