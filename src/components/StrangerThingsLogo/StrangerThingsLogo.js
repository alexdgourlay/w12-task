import React from "react";
import anime from "animejs/lib/anime.es";

import "./StrangerThingsLogo.css";
import strangerLogo from "../../assets/svg/stranger-things-logo.svg";
import { initGui } from "./StrangerThingsLogo.gui";

class StrangerThingsLogo extends React.Component {
  get logoAnimationDuration() {
    return this.state.logoAnimationDuration;
  }

  set logoAnimationDuration(duration) {
    this.setState({
      logoAnimationDuration: duration
    });
  }
  get minimumOpacity() {
    return this.state.minimumOpacity;
  }
  set minimumOpacity(opacity) {
    this.setState({
      minimumOpacity: opacity
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      logoAnimationDuration: 0,
      minimumOpacity: 0
    };
  }

  componentDidMount() {
    initGui(this);
  }

  render() {
    const { animationDuration, minimumOpacity } = this.state;

    console.log(animationDuration);

    const timeline1 = anime.timeline({
      duration: animationDuration,
      easing: "linear",
      loop: true,
      autoplay: true
    });

    // timeline1.duration = animationDuration;

    timeline1.add({
      targets: ".logo-container",
      translateX: -500,
      translateY: -400,
      keyframes: [{ opacity: minimumOpacity }, { opacity: 1 }]
    });

    console.log(timeline1);

    return (
      <div className="logo-container" style={{ top: "550px", left: "1350px" }}>
        <object type="image/svg+xml" className="logo" id="logo" data={strangerLogo}>
          Logo
        </object>
      </div>
    );
  }
}

export default StrangerThingsLogo;
