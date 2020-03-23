import React from "react";
import anime from "animejs/lib/anime.es";

import "./StrangerThingsLogo.css";
import { initGui } from "./StrangerThingsLogo.gui";

import { ReactComponent as LogoHr1 } from "../../assets/svg/st-logo/hr1.svg";
import { ReactComponent as LogoHr2 } from "../../assets/svg/st-logo/hr2.svg";
import { ReactComponent as LogoHr3 } from "../../assets/svg/st-logo/hr3.svg";
import { ReactComponent as LogoS1 } from "../../assets/svg/st-logo/S1.svg";
import { ReactComponent as LogoT1 } from "../../assets/svg/st-logo/T1.svg";
import { ReactComponent as LogoR1 } from "../../assets/svg/st-logo/R1.svg";
import { ReactComponent as LogoA1 } from "../../assets/svg/st-logo/A1.svg";
import { ReactComponent as LogoN1 } from "../../assets/svg/st-logo/N1.svg";
import { ReactComponent as LogoG1 } from "../../assets/svg/st-logo/G1.svg";
import { ReactComponent as LogoE1 } from "../../assets/svg/st-logo/E1.svg";
import { ReactComponent as LogoR2 } from "../../assets/svg/st-logo/R2.svg";
import { ReactComponent as LogoT2 } from "../../assets/svg/st-logo/T2.svg";
import { ReactComponent as LogoH1 } from "../../assets/svg/st-logo/H1.svg";
import { ReactComponent as LogoI1 } from "../../assets/svg/st-logo/I1.svg";
import { ReactComponent as LogoN2 } from "../../assets/svg/st-logo/N2.svg";
import { ReactComponent as LogoG2 } from "../../assets/svg/st-logo/G2.svg";
import { ReactComponent as LogoS2 } from "../../assets/svg/st-logo/S2.svg";

class StrangerThingsLogo extends React.Component {
  get animationDuration() {
    return this.state.animationDuration;
  }
  set animationDuration(duration) {
    this.setState({
      animationDuration: duration
    });
  }
  get minOpacity() {
    return this.state.minOpacity;
  }
  set minOpacity(opacity) {
    this.setState({
      minOpacity: opacity
    });
  }
  get scaleFactor() {
    return this.state.scaleFactor;
  }
  set scaleFactor(factor) {
    this.setState({
      scaleFactor: factor
    });
  }
  get expansionFactor() {
    return this.state.expansionFactor;
  }
  set expansionFactor(factor) {
    this.setState({
      expansionFactor: factor
    });
  }

  play = function() {
    this.timeline.play();
  };
  restart = function() {
    this.timeline.restart();
    this.timeline.pause();
  };

  timeline;

  constructor(props) {
    super(props);

    this.state = {
      logoSvg: null,
      animationDuration: 0,
      minOpacity: 0,
      scaleFactor: 0,
      expansionFactor: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      initGui(this);
    }, 200);
  }

  render() {
    const { animationDuration, minOpacity, scaleFactor, expansionFactor } = this.state;

    this.timeline = anime.timeline({
      easing: "easeOutCirc",
      loop: false,
      autoplay: false,
      timelineOffset: 0,
      duration: animationDuration
    });

    this.timeline
      .add(
        {
          targets: ".logo-container",
          top: [
            { value: 550, duration: 0 },
            { value: 230, duration: 0.5 * animationDuration }
          ],
          left: [
            { value: 1200, duration: 0 },
            { value: -50, duration: 0.5 * animationDuration }
          ],
          scale: [
            { value: 1, duration: 0 },
            { value: scaleFactor, duration: 0.25 * animationDuration },
            { value: 1, duration: 0.7 * animationDuration }
          ]
        },
        600
      )
      .add(
        {
          targets: "path",
          "stroke-width": [
            { value: 0, duration: 0 },
            { value: "4px", duration: 0.5 * animationDuration },
            { value: 0, duration: animationDuration }
          ],
          fill: [
            { value: "rgb(233, 42, 45)", duration: 0 },
            { value: `rgba(233,42,45,${minOpacity})`, duration: 0.2 * animationDuration },
            { value: `rgba(233,42,45,${minOpacity})`, duration: 0.9 * animationDuration },
            { value: "rgb(233, 42, 45)", duration: animationDuration }
          ]
        },
        0
      )
      .add(
        {
          targets: "path#hr1,path#hr2,path#hr3",
          opacity: [
            { value: 1, duration: 0 },
            { value: 0, duration: 0.1 * animationDuration },
            { value: 0, duration: 0.95 * animationDuration },
            { value: 1, duration: 1 * animationDuration }
          ]
        },
        0
      )
      .add(
        {
          targets: "svg#s1",
          translateX: [
            { value: 0, duration: 0 },
            { value: -15 * expansionFactor, duration: 0.4 * animationDuration },
            { value: 0, duration: 0.6 * animationDuration }
          ]
        },
        500
      )
      .add(
        {
          targets: "svg#e1",
          translateY: [
            { value: 0, duration: 0 },
            { value: -15 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.7 * animationDuration }
          ]
        },
        0
      )
      .add(
        {
          targets: "svg#s2",
          translateY: [
            { value: 0, duration: 0 },
            { value: 10 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.6 * animationDuration }
          ]
        },
        500
      )
      .add(
        {
          targets: "svg#t1",
          translateX: [
            { value: 0, duration: 0 },
            { value: -10 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.6 * animationDuration }
          ]
        },
        600
      )
      .add(
        {
          targets: "svg#r1",
          translateX: [
            { value: 0, duration: 0 },
            { value: -10 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.6 * animationDuration }
          ]
        },
        600
      )
      .add(
        {
          targets: "svg#h1",
          translateY: [
            { value: 0, duration: 0 },
            { value: 10 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.7 * animationDuration }
          ]
        },
        0
      )
      .add(
        {
          targets: "svg#n2",
          translateY: [
            { value: 0, duration: 0 },
            { value: 5 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.7 * animationDuration }
          ]
        },
        0
      )
      .add(
        {
          targets: "svg#t2",
          translateX: [
            { value: 0, duration: 0 },
            { value: -15 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.7 * animationDuration }
          ]
        },
        0
      )
      .add(
        {
          targets: "svg#r2",
          translateX: [
            { value: 0, duration: 0 },
            { value: 15 * expansionFactor, duration: 0.3 * animationDuration },
            { value: 0, duration: 0.7 * animationDuration }
          ]
        },
        0
      );

    return (
      <div className="logo-container" style={{ top: 550, left: 1350 }}>
        <LogoHr1 className="logo" />
        <LogoHr2 className="logo" />
        <LogoHr3 className="logo" />
        <LogoS1 className="logo" />
        <LogoT1 className="logo" />
        <LogoR1 className="logo" />
        <LogoA1 className="logo" />
        <LogoN1 className="logo" />
        <LogoG1 className="logo" />
        <LogoE1 className="logo" />
        <LogoR2 className="logo" />
        <LogoT2 className="logo" />
        <LogoH1 className="logo" />
        <LogoI1 className="logo" />
        <LogoN2 className="logo" />
        <LogoG2 className="logo" />
        <LogoS2 className="logo" />
      </div>
    );
  }
}

export default StrangerThingsLogo;
